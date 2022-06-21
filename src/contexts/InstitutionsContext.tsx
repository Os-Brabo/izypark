import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  Unsubscribe
} from "firebase/firestore";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState
} from "react";
import { useAuth } from "../hooks/useAuth";

interface Institution {
  address: string;
  cep: string;
  city: string;
  initials: string;
  name: string;
  state: string;
  id: string;
}
interface FormatedInstitution {
  name: string;
  id: string;
  isFavorite: boolean;
}

type Props = {
  isLoading: boolean;
  institutions: FormatedInstitution[];
};

export const InstitutionContext = createContext({} as Props);
// eslint-disable-next-line @typescript-eslint/ban-types
export function InstitutionProvider({ children }: PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useAuth();
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [formatedInstitutions, setFormatedInstitutions] = useState<
    FormatedInstitution[]
  >([]);
  const firestore = getFirestore();
  let unsubscribe: Unsubscribe;

  function fetchInstitutions() {
    const institutionsRef = collection(firestore, "institutions");
    const q = query(institutionsRef);
    const unsub = onSnapshot(q, (firebaseData) => {
      const data: Institution[] = [];
      firebaseData.forEach((doc) => {
        const institution = { id: doc.id, ...doc.data() } as Institution;
        data.push(institution);
      });
      setInstitutions(data);
    });
    unsubscribe = unsub;
  }
  function isFavorite(id: string): boolean {
    const favoriteInstitutions = userData?.favoriteInstitutions;
    const favorite = favoriteInstitutions?.find(
      (institutionId) => institutionId === id
    );
    console.log(favorite);
    return Boolean(favorite);
  }
  function formatInstitutions() {
    const formated: FormatedInstitution[] = institutions.map((institution) => {
      return {
        id: institution.id,
        isFavorite: isFavorite(institution.id),
        name: institution.name
      };
    });
    setFormatedInstitutions(formated);
  }

  function favoriteInstitutions(): FormatedInstitution[] {
    return formatedInstitutions.filter((institution) => institution.isFavorite);
  }

  useEffect(() => {
    fetchInstitutions();
    formatInstitutions();
    return unsubscribe;
  }, []);

  const value = {
    isLoading,
    institutions: formatedInstitutions
  };
  return (
    <InstitutionContext.Provider value={value}>
      {children}
    </InstitutionContext.Provider>
  );
}
