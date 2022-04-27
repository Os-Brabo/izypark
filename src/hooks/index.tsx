import React, { ReactNode } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { ToasterProvider } from "./Toaster";

interface Props {
  children: ReactNode;
}
export function AppProvider({ children }: Props) {
  return (
    <ToasterProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ToasterProvider>
  )
}