import { useContext } from "react";
import { InstitutionContext } from "../contexts/InstitutionsContext";

export function useInstitution() {
  return useContext(InstitutionContext);
}
