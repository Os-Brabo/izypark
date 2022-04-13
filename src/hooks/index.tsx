import React, { ReactNode } from "react";
import { ToasterProvider } from "./Toaster";

interface Props {
  children: ReactNode;
}
export function AppProvider({ children }: Props) {
  return (
    <ToasterProvider>
      {children}
    </ToasterProvider>
  )
}