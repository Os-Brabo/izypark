import {
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
  signInWithCredential,
  AuthCredential
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { useNotifications } from "../hooks/useNotifications";

import { Either, left, right } from "../utils/Either";
import { Block } from "./BlocksContext";
import { Institution, Product } from "./InstitutionsContext";

export type UserBoughtProduct = Product & {
  id: string;
  productId: string;
  boughtAt: Date;
  status: "withdrawn" | "waiting_withdrawal";
};

type UserData = {
  id: string;
  favoriteInstitutions: string[];
  coins: number;
  boughtProducts: UserBoughtProduct[];
  parkedAt: {
    institutionId: string;
    blockId: string;
    parkedAt: Date;
    institutionName: string;
    blockName: string;
  } | null;
  savedGaz: number;
  name: string;
  expoPushToken?: string;
};

type PasswordSignProps = {
  email: string;
  password: string;
  name: string;
};

type AuthContextProps = {
  isAuthenticated: boolean;
  user: FirebaseUser | null;
  userData: UserData;
  isLoading: boolean;
  credentialSignIn(credential: AuthCredential): Promise<Either<Error, null>>;
  signUpWithPassword(props: PasswordSignProps): Promise<Either<Error, null>>;
  signInWithPassword(props: PasswordSignProps): Promise<Either<Error, null>>;
  signOut(): Promise<void>;
  setParkedCar(
    institution: Institution,
    block: Block
  ): Promise<Either<Error, null>>;
  clearParkedCar(): Promise<Either<Error, null>>;
  favoriteInstitution(institutionId: string): Promise<void>;
  updateUserData(data: Partial<UserData>): Promise<void>;
};

type ProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: ProviderProps) {
  const auth = getAuth();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const { expoPushToken } = useNotifications();
  const firestore = getFirestore();

  async function createUserData() {
    try {
      const userDocRef = doc(firestore, "usersData", auth!.currentUser!.uid);
      const userInitialData = {
        id: auth!.currentUser!.uid,
        favoriteInstitutions: [],
        parkedAt: null,
        boughtProducts: [],
        savedGaz: 0,
        coins: 0,
        name: auth.currentUser?.displayName || "Anônimo"
      };
      await setDoc(userDocRef, userInitialData);
      setUserData(userInitialData);
    } catch (error) {
      console.warn(error);
    }
  }

  const updateUserData = useCallback(
    async (data: Partial<UserData>) => {
      if (!auth.currentUser || !userData) return;
      try {
        const userDocRef = doc(firestore, "usersData", auth.currentUser.uid);
        const newData = { ...userData, ...data };
        await setDoc(userDocRef, newData);
        setUserData(newData);
      } catch (error) {
        console.error(error);
      }
    },
    [userData]
  );

  async function generateUserData() {
    if (!auth.currentUser) return;
    const userDocRef = doc(firestore, "usersData", auth.currentUser.uid);
    const snap = await getDoc(userDocRef);
    if (!snap.exists()) {
      return createUserData();
    }
    const data = snap.data() as UserData;
    if (data.coins === undefined) {
      data.coins = 0;
      await updateUserData({ coins: 0 });
    }
    if (data.boughtProducts === undefined) {
      data.boughtProducts = [];
      await updateUserData({ boughtProducts: [] });
    } else {
      data.boughtProducts = data.boughtProducts.map((prod) => ({
        ...prod,
        boughtAt: (prod.boughtAt as any).toDate()
      }));
    }
    if (data.savedGaz === undefined) {
      data.savedGaz = 0;
      await updateUserData({ savedGaz: 0 });
    }
    if (data.name === undefined) {
      await updateUserData({ name: auth.currentUser.displayName || "Anônimo" });
    }
    if (data?.parkedAt) {
      data.parkedAt.parkedAt = (data.parkedAt.parkedAt as any).toDate();
    }
    setUserData(data as UserData);
  }
  const favoriteInstitution = useCallback(
    async (instituionId: string) => {
      if (!userData) return;
      const newUserData = { ...userData };
      console.log(newUserData);
      if (userData.favoriteInstitutions.includes(instituionId)) {
        // remove from favorites
        newUserData.favoriteInstitutions = userData.favoriteInstitutions.filter(
          (id) => id !== instituionId
        );
      } else {
        // add to favorites
        newUserData.favoriteInstitutions = [
          ...userData.favoriteInstitutions,
          instituionId
        ];
      }
      setUserData(newUserData);
      const userDocRef = doc(firestore, "usersData", userData.id);
      await setDoc(userDocRef, newUserData);
    },
    [userData]
  );

  async function setParkedCar(
    institution: Institution,
    block: Block
  ): Promise<Either<Error, null>> {
    if (!userData) return right(null);
    const newUserData = {
      ...userData,
      parkedAt: {
        institutionId: institution.id,
        institutionName: institution.initials,
        blockId: block.id,
        blockName: block.name,
        parkedAt: new Date()
      }
    } as UserData;
    const userDocRef = doc(firestore, "usersData", userData.id);
    await setDoc(userDocRef, newUserData);
    setUserData(newUserData);
    return right(null);
  }
  async function clearParkedCar(): Promise<Either<Error, null>> {
    if (!userData) return right(null);
    const savedGaz = userData.savedGaz + 37.5;
    const coins = userData.coins + 1;
    const userDocRef = doc(firestore, "usersData", userData.id);
    await setDoc(userDocRef, { ...userData, parkedAt: null, savedGaz, coins });

    setUserData({
      ...userData,
      parkedAt: null,
      savedGaz,
      coins
    } as UserData);
    return right(null);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (responseUser) => {
      await generateUserData();
      setUser(responseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const credentialSignIn = useCallback(
    async (credential: AuthCredential): Promise<Either<Error, null>> => {
      try {
        await signInWithCredential(auth, credential);
        return right(null);
      } catch (err: any) {
        return left(err.message);
      }
    },
    []
  );

  const signUpWithPassword = useCallback(
    async ({
      email,
      password,
      name
    }: PasswordSignProps): Promise<Either<Error, null>> => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await createUserData();
        await updateUserData({ name });
        return right(null);
      } catch (err: any) {
        return left(new Error(err.message));
      }
    },
    []
  );

  const signInWithPassword = useCallback(
    async ({
      email,
      password
    }: PasswordSignProps): Promise<Either<Error, null>> => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        return right(null);
      } catch (err: any) {
        return left(new Error(err.message));
      }
    },
    []
  );

  const signOut = useCallback(async () => {
    firebaseSignOut(auth);
  }, []);

  useEffect(() => {
    if (expoPushToken && expoPushToken !== userData.expoPushToken) {
      updateUserData({ expoPushToken });
    }
  }, [expoPushToken]);

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      user,
      isLoading,
      userData,
      credentialSignIn,
      signUpWithPassword,
      signInWithPassword,
      signOut,
      setParkedCar,
      clearParkedCar,
      favoriteInstitution,
      updateUserData
    }),
    [
      user,
      isLoading,
      credentialSignIn,
      signUpWithPassword,
      signInWithPassword,
      signOut,
      setParkedCar,
      clearParkedCar,
      favoriteInstitution,
      updateUserData
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
