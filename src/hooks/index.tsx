import React, { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BlocksProvider } from "../contexts/BlocksContext";
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
          <BlocksProvider>
            <VehicleProvider>{children}</VehicleProvider>
          </BlocksProvider>
        </InstitutionProvider>
      </AuthProvider>
    </ToasterProvider>
  );
}
