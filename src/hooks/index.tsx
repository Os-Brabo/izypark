import React, { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { InstitutionProvider } from "../contexts/InstitutionsContext";
import { VehicleProvider } from "../contexts/VehicleContext";
import { ToasterProvider } from "./Toaster";

interface Props {
  children: ReactNode;
}
export function AppProvider({ children }: Props) {
  return (
    <ToasterProvider>
      <AuthProvider>
        <InstitutionProvider>
          <VehicleProvider>{children}</VehicleProvider>
        </InstitutionProvider>
      </AuthProvider>
    </ToasterProvider>
  );
}
