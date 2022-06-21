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

interface Institution {
  address: string;
  cep: string;
  city: string;
  initials: string;
  name: string;
  state: string;
  id: string;
}

type Props = {
  isLoading: boolean;
  institutions: Institution[];
};

export const InstitutionContext = createContext({} as Props);

export function InstitutionProvider({ children }: PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = useState(false);
  const [institutions, setInstitutions] = useState<Institution[]>([]);
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

  useEffect(() => {
    fetchInstitutions();
    return unsubscribe;
  }, []);

  const value = {
    isLoading,
    institutions
  };
  return (
    <InstitutionContext.Provider value={value}>
      {children}
    </InstitutionContext.Provider>
  );
}
