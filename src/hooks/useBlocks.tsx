import { useContext } from "react";
import { BlocksContext } from "../contexts/BlocksContext";

export function useBlocks() {
  return useContext(BlocksContext);
}
