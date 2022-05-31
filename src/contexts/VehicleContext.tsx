import React, { createContext, PropsWithChildren, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { useAuth } from "../hooks/useAuth";
import { firestore } from "../services/firesotre";
import { Either, left, right } from "../utils/Either";

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
    try {
      const institutionDocRef = doc(firestore, "car", id);
      await setDoc(institutionDocRef, { ...data, userId: user?.uid });
      // const institutionDocRef = doc(firestore, 'institutions', id)
      // await setDoc(institutionDocRef, { ...fields, userId: user?.uid })
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
