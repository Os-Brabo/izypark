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
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc
} from "firebase/firestore";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import { Either, left, right } from "../utils/Either";
import { createUuid } from "../utils/gererateUuid";

type UserData = {
  email: string;
  favoriteInstitutions: string[];
};

type PasswordSignProps = {
  email: string;
  password: string;
};

type AuthContextProps = {
  isAuthenticated: boolean;
  user: FirebaseUser | null;
  userData: UserData | null;
  isLoading: boolean;
  credentialSignIn(credential: AuthCredential): Promise<Either<Error, null>>;
  signUpWithPassword(props: PasswordSignProps): Promise<Either<Error, null>>;
  signInWithPassword(props: PasswordSignProps): Promise<Either<Error, null>>;
  signOut(): Promise<void>;
};

type ProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: ProviderProps) {
  const auth = getAuth();
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const firestore = getFirestore();
  // let unsubscribe: Unsubscribe;

  async function createUserData(userEmail: string) {
    console.log("createUserData");
    try {
      const userDocRef = doc(firestore, "usersData", createUuid());
      const userInitialData = {
        email: userEmail,
        favoriteInstitutions: [],
        parkedAt: null
      };
      await setDoc(userDocRef, userInitialData);
      setUserData(userInitialData);
    } catch (error) {
      console.warn(error);
    }
  }

  async function generateUserData(userEmail: string) {
    const usersRef = collection(firestore, "usersData");
    const { docs } = await getDocs(usersRef);
    const userData = docs.find((doc) => doc.data().email === userEmail);
    console.log(userData?.data());
    if (userData) setUserData(userData.data() as UserData);
    else createUserData(userEmail);
  }
  async function favoriteInstitution(instituionId: string): Promise<void> {
    //
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (responseUser) => {
      console.log(responseUser);
      const mail = responseUser?.email as string;
      await generateUserData(mail);
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
      password
    }: PasswordSignProps): Promise<Either<Error, null>> => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
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

  const value = useMemo(
    () => ({
      isAuthenticated: !!user,
      user,
      isLoading,
      userData,
      credentialSignIn,
      signUpWithPassword,
      signInWithPassword,
      signOut
    }),
    [
      user,
      isLoading,
      credentialSignIn,
      signUpWithPassword,
      signInWithPassword,
      signOut
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
