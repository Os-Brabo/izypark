import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState
} from "react";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  Unsubscribe,
  where
} from "firebase/firestore";
// Add this line to your `index.js`
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { useAuth } from "../hooks/useAuth";

import { Either, left, right } from "../utils/Either";

type Vehicle = {
  id: string;
  model: string;
  color: string;
  plate: string;
};

type VehicleFields = Omit<Vehicle, "id">;

type VehicleContextProps = {
  isLoading: boolean;
  data?: Vehicle[];
  create: (fields: VehicleFields) => Promise<Either<Error, null>>;
};

export const VehicleContext = createContext({} as VehicleContextProps);

// eslint-disable-next-line @typescript-eslint/ban-types
export function VehicleProvider({ children }: PropsWithChildren<{}>) {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const firestore = getFirestore();
  let unsubscribe: Unsubscribe;
  async function create(data: VehicleFields): Promise<Either<Error, null>> {
    const id = uuid();
    try {
      const vehicleDocRef = doc(firestore, "cars", id);
      console.log(user?.uid);
      await setDoc(vehicleDocRef, { ...data, userId: user?.uid });
      setVehicles([...vehicles, { ...data, id }]);
      return right(null);
    } catch (error: any) {
      console.log("err", error);
      return left(new Error(error.message));
    }
  }
  async function fetchVehicles() {
    const vehiclesRef = collection(firestore, "cars");
    const q = query(vehiclesRef, where("userId", "==", user?.uid));
    const unsub = onSnapshot(q, (firebaseData) => {
      const data: Vehicle[] = [];
      firebaseData.forEach((doc) => {
        const vehicle = { id: doc.id, ...doc.data() } as Vehicle;
        data.push(vehicle);
      });
      setVehicles(data);
    });
    unsubscribe = unsub;
  }
  useEffect(() => {
    fetchVehicles();
    return unsubscribe;
  }, []);

  const value = {
    isLoading,
    data: vehicles,
    create
  };
  return (
    <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
  );
}
