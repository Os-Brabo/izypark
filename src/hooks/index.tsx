import React, { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { VehicleProvider } from "../contexts/VehicleContext";
import { ToasterProvider } from "./Toaster";

interface Props {
  children: ReactNode;
}
export function AppProvider({ children }: Props) {
  return (
    <ToasterProvider>
      <AuthProvider>
        <VehicleProvider>{children}</VehicleProvider>
      </AuthProvider>
    </ToasterProvider>
  );
}
