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

export interface Institution {
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
  favoriteInstitutions(): FormatedInstitution[];
  currentInstitution: Institution | null;
  selectInstitution(id: string): void;
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
  const [currentInstitution, setCurrentInstitution] =
    useState<Institution | null>(null);
  const firestore = getFirestore();
  let unsubscribe: Unsubscribe;

  function isFavorite(id: string): boolean {
    if (!userData) return false;
    const { favoriteInstitutions } = userData;
    if (!favoriteInstitutions) return false;
    const favorite = favoriteInstitutions.find(
      (institutionId) => institutionId === id
    );
    if (!favorite) return false;
    return true;
  }

  function formatInstitutions() {
    const formated: FormatedInstitution[] = institutions.map((institution) => {
      return {
        id: institution.id,
        isFavorite: isFavorite(institution.id),
        name: institution.initials
      };
    });

    setFormatedInstitutions(formated);
  }
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

  function selectInstitution(id: string) {
    const institution = institutions.find(
      (institution) => institution.id === id
    );
    if (!institution) return;
    setCurrentInstitution(institution);
  }

  function favoriteInstitutions(): FormatedInstitution[] {
    return formatedInstitutions.filter((institution) => institution.isFavorite);
  }

  useEffect(() => {
    fetchInstitutions();
    return unsubscribe;
  }, []);
  useEffect(() => {
    formatInstitutions();
  }, [userData?.favoriteInstitutions]);
  useEffect(() => {
    if (userData.parkedAt) selectInstitution(userData.parkedAt?.institutionId);
  }, [userData?.parkedAt]);
  const value = {
    isLoading,
    institutions: formatedInstitutions,
    favoriteInstitutions,
    currentInstitution,
    selectInstitution
  };
  return (
    <InstitutionContext.Provider value={value}>
      {children}
    </InstitutionContext.Provider>
  );
}
