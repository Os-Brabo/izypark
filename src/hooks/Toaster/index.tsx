import React, { createContext, useCallback, useContext, useState } from "react";
import { ToasterContextData, ToasterProviderProps } from "./types";

export const ToasterContext = createContext({} as ToasterContextData);
export const ToasterProvider = ({ children }: ToasterProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState(3000);

  const showToaster = useCallback((message: string, duration?: number) => {
    setMessage(message);
    if (duration) {
      setDuration(duration);
    }
    setVisible(true);
  }, []);

  const onDismiss = useCallback(() => {
    setVisible(false);
    setDuration(3000);
  }, []);

  return (
    <ToasterContext.Provider
      value={{
        visible,
        message,
        duration,
        showToaster,
        onDismiss
      }}
    >
      {children}
    </ToasterContext.Provider>
  );
};

export function useToaster(): ToasterContextData {
  const context = useContext(ToasterContext);

  if (!context) {
    console.error("No Toaster Context found");
  }

  return context;
}
