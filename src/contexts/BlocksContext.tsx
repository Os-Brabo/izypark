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
  setDoc
} from "firebase/firestore";
import { useInstitution } from "../hooks/useInstitution";
import { Either, left, right } from "../utils/Either";
import { useAuth } from "../hooks/useAuth";

type Block = {
  id: string;
  name: string;
  vacancies: number;
  availableNow: number;
};

type BlockContextProps = {
  isLoading: boolean;
  blocks?: Block[];
  parkBlock(block: Block): Promise<Either<Error, null>>;
};

export const BlocksContext = createContext({} as BlockContextProps);

export function BlocksProvider({ children }: PropsWithChildren<{}>) {
  const { currentInstitution } = useInstitution();
  const { } = useAuth();
  const [blocks, setBlocks] = useState<Block[]>();
  const [isLoading, setIsLoading] = useState(true);
  const firestore = getFirestore();

  async function fetchBlocks() {
    if (!currentInstitution) return;
    const blocksRef = collection(
      firestore,
      "institutions",
      currentInstitution.id,
      "blocks"
    );
    const result = await getDocs(blocksRef);
    const data: Block[] = [];
    result.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() } as Block);
    });
    setBlocks(data);
    setIsLoading(false);
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
      await setDoc(blockRef, {
        ...block,
        availableNow: block.availableNow - 1
      });

      return right(null);
    } catch (error: any) {
      console.log("err", error);
      return left(new Error(error.message));
    }
  }

  useEffect(() => {
    fetchBlocks();
  }, [currentInstitution]);

  const value: BlockContextProps = useMemo(
    () => ({
      blocks,
      isLoading,
      parkBlock
    }),
    [blocks, isLoading]
  );

  return (
    <BlocksContext.Provider value={value}>{children}</BlocksContext.Provider>
  );
}
