import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  Unsubscribe,
  where
} from "firebase/firestore";
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState
} from "react";
import { useAuth } from "../hooks/useAuth";
import { v4 as uuidv4 } from "uuid";

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

type CurrentInstitution = Institution & {
  products: Product[];
};

export interface Product {
  id: string;
  description: string;
  image: string;
  isDisabled: boolean;
  price: number;
  title: string;
  quantity: number;
}

type PurchaseRegistry = Omit<Product, "id"> & {
  id: string;
  productId: string;
  userId: string;
  purchasedAt: Date;
};

type Props = {
  isLoading: boolean;
  institutions: FormatedInstitution[];
  favoriteInstitutions(): FormatedInstitution[];
  currentInstitution: CurrentInstitution | null;
  selectInstitution(id: string): Promise<void>;
  handleProductPurchase(id: string): Promise<void>;
};

export const InstitutionContext = createContext({} as Props);
// eslint-disable-next-line @typescript-eslint/ban-types
export function InstitutionProvider({ children }: PropsWithChildren<{}>) {
  const [isLoading, setIsLoading] = useState(false);
  const { userData, user, updateUserData } = useAuth();
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [formatedInstitutions, setFormatedInstitutions] = useState<
    FormatedInstitution[]
  >([]);
  const [currentInstitution, setCurrentInstitution] =
    useState<CurrentInstitution | null>(null);
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

  async function fetchProducts(institutionId: string) {
    const productsRef = collection(
      firestore,
      "institutions",
      institutionId,
      "products"
    );
    const q = query(productsRef, where("isDisabled", "==", false));
    const result = await getDocs(q);
    const data: Product[] = [];
    result.forEach((product) => {
      const info = product.data() as Product;
      data.push({ ...info, id: product.id });
    });
    return data;
  }

  async function decreaseProductQuantity(id: string) {
    if (!currentInstitution) return;
    const productRef = doc(
      firestore,
      "institutions",
      currentInstitution.id,
      "products",
      id
    );
    const result = await getDoc(productRef);
    const data = result.data() as Product;
    await setDoc(productRef, { ...data, quantity: data.quantity - 1 });
  }

  async function registerPurchase(product: Product): Promise<string> {
    if (!currentInstitution || !user) return "";
    const id = uuidv4();
    const purchasesRef = doc(
      firestore,
      "institutions",
      currentInstitution.id,
      "purchases",
      id
    );
    const purchase: PurchaseRegistry = {
      ...product,
      id,
      productId: product.id,
      userId: user.uid,
      purchasedAt: new Date()
    };
    await setDoc(purchasesRef, purchase);
    return id;
  }

  async function handleProductPurchase(prodId: string): Promise<void> {
    if (!currentInstitution || !userData) return;
    const product = currentInstitution.products.find((p) => p.id === prodId);
    if (!product) return;
    await decreaseProductQuantity(prodId);
    const id = await registerPurchase(product);

    await updateUserData({
      coins: userData.coins - product.price,
      boughtProducts: [
        ...userData.boughtProducts,
        {
          ...product,
          id,
          productId: prodId,
          boughtAt: new Date(),
          status: "waiting_withdrawal"
        }
      ]
    });
  }

  async function selectInstitution(id: string) {
    const institution = institutions.find(
      (institution) => institution.id === id
    );
    if (!institution) return;
    const products = await fetchProducts(id);
    setCurrentInstitution({ ...institution, products });
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
    selectInstitution,
    handleProductPurchase
  };
  return (
    <InstitutionContext.Provider value={value}>
      {children}
    </InstitutionContext.Provider>
  );
}
