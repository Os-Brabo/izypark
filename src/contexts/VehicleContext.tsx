import { createContext, PropsWithChildren, useState } from "react";
import { v4 as uuid } from "uuid";
import { useAuth } from "../hooks/useAuth";
import { Either } from "../utils/Either";

type Vehicle = {
  id: string;
  name: string;
  model: string;
  color: string;
  plate: string;
};

type CreateVehicleFields = Omit<Vehicle, "id">;

type VehicleContextProps = {
  isLoading: boolean;
  data?: Vehicle;
  create: (fields: CreateVehicleFields) => Promise<Either<Error, null>>;
};

export const VehicleContext = createContext({} as VehicleContextProps);

export function VehicleProvider({ children }: PropsWithChildren<{}>) {
  const user = useAuth();
  const [vehicles, setVehicles] = useState<Vehicle>();
  const [isLoading, setIsLoading] = useState(false);
}
