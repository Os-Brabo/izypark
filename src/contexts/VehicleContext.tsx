import React, { createContext, PropsWithChildren, useState } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// Add this line to your `index.js`
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { useAuth } from "../hooks/useAuth";

import { Either, left, right } from "../utils/Either";

import { initializeApp } from "firebase/app";

type Vehicle = {
  id: string;
  model: string;
  color: string;
  plate: string;
};

type CreateVehicleFields = Omit<Vehicle, "id">;

type VehicleContextProps = {
  isLoading: boolean;
  data?: Vehicle[];
  create: (fields: CreateVehicleFields) => Promise<Either<Error, null>>;
};

export const VehicleContext = createContext({} as VehicleContextProps);

// eslint-disable-next-line @typescript-eslint/ban-types
export function VehicleProvider({ children }: PropsWithChildren<{}>) {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function create(
    data: CreateVehicleFields
  ): Promise<Either<Error, null>> {
    console.log("vehicle user");
    const id = uuid();
    const firestore = getFirestore();
    try {
      const vehicleDocRef = doc(firestore, "cars", id);
      console.log(user?.uid);
      await setDoc(vehicleDocRef, { ...data, userId: user?.uid });
      // // const institutionDocRef = doc(firestore, 'institutions', id)
      // // await setDoc(institutionDocRef, { ...fields, userId: user?.uid })
      // await setDoc(doc(firestore, "characters", "mario"), {
      //   employment: "plumber",
      //   outfitColor: "red",
      //   specialAttack: "fireball"
      // });
      return right(null);
    } catch (error: any) {
      console.log("err", error);
      return left(new Error(error.message));
    }
    // setInstitution({ id, ...fields })
  }

  const value = {
    isLoading,
    data: vehicles,
    create
  };
  return (
    <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
  );
}
