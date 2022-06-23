import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState
} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useInstitution } from "../hooks/useInstitution";

type Block = {
  id: string;
  name: string;
  vacancies: number;
  availableNow: number;
};

type BlockContextProps = {
  isLoading: boolean;
  blocks?: Block[];
};

export const BlocksContext = createContext({} as BlockContextProps);

export function BlocksProvider({ children }: PropsWithChildren<{}>) {
  const { currentInstitution } = useInstitution();
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
  useEffect(() => {
    fetchBlocks();
  }, [currentInstitution]);

  const value: BlockContextProps = useMemo(
    () => ({
      blocks,
      isLoading
    }),
    [blocks, isLoading]
  );

  return (
    <BlocksContext.Provider value={value}>{children}</BlocksContext.Provider>
  );
}
