import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Unsubscribe,
  updateDoc
} from "firebase/firestore";
import { useInstitution } from "../hooks/useInstitution";
import { Either, left, right } from "../utils/Either";
import { useAuth } from "../hooks/useAuth";

export type Block = {
  id: string;
  name: string;
  vacancies: number;
  availableNow: number;
};

type BlockContextProps = {
  isLoading: boolean;
  blocks?: Block[];
  parkBlock(block: Block): Promise<Either<Error, null>>;
  exitBlock(blockId: string): Promise<void>;
};

export const BlocksContext = createContext({} as BlockContextProps);

export function BlocksProvider({ children }: PropsWithChildren<{}>) {
  const { currentInstitution } = useInstitution();
  const { setParkedCar, clearParkedCar } = useAuth();
  const [blocks, setBlocks] = useState<Block[]>();
  const [isLoading, setIsLoading] = useState(true);
  const firestore = getFirestore();
  let unsubscribe: Unsubscribe;

  async function fetchBlocks() {
    if (!currentInstitution) return;
    const blocksRef = collection(
      firestore,
      "institutions",
      currentInstitution.id,
      "blocks"
    );
    const q = query(blocksRef, orderBy("createdAt"));
    const unsub = onSnapshot(blocksRef, (firebaseData) => {
      const data: Block[] = [];
      firebaseData.forEach((doc) => {
        const block = { id: doc.id, ...doc.data() } as Block;
        data.push(block);
      });
      setBlocks(data);
      setIsLoading(false);
    });
    unsubscribe = unsub;
  }

  async function parkBlock(block: Block): Promise<Either<Error, null>> {
    try {
      const blockRef = doc(
        firestore,
        "institutions",
        currentInstitution.id,
        "blocks",
        block.id
      );
      await updateDoc(blockRef, { availableNow: block.availableNow - 1 });
      // await setDoc(blockRef, {
      //   ...block,
      //   availableNow: block.availableNow - 1
      // });
      await setParkedCar(currentInstitution, block);
      return right(null);
    } catch (error: any) {
      console.log("err", error);
      return left(new Error(error.message));
    }
  }
  async function exitBlock(blockId: string) {
    const block = blocks?.find((block) => block.id === blockId);
    if (!block) throw new Error("sem block");
    const blockRef = doc(
      firestore,
      "institutions",
      currentInstitution.id,
      "blocks",
      blockId
    );
    await updateDoc(blockRef, { availableNow: block.availableNow + 1 });
    // await setDoc(blockRef, {
    //   ...block,
    //   availableNow: block.availableNow + 1
    // });
    await clearParkedCar();
  }
  useEffect(() => {
    fetchBlocks();
    return unsubscribe;
  }, [currentInstitution]);

  const value: BlockContextProps = useMemo(
    () => ({
      blocks,
      isLoading,
      parkBlock,
      exitBlock
    }),
    [blocks, isLoading]
  );

  return (
    <BlocksContext.Provider value={value}>{children}</BlocksContext.Provider>
  );
}
