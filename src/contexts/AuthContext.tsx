import {
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser
} from "firebase/auth";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import { Either, left, right } from "../utils/Either";

type PasswordSignProps = {
  email: string;
  password: string;
};

type AuthContextProps = {
  isAuthenticated: boolean;
  user: FirebaseUser | null;
  isLoading: boolean;
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (responseUser) => {
      setUser(responseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

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
      signUpWithPassword,
      signInWithPassword,
      signOut
    }),
    [user, isLoading, signUpWithPassword, signInWithPassword, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
