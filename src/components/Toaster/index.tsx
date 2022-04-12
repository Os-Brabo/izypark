import React from "react";
import { Snackbar } from "react-native-paper";
import { useToaster } from "../../hooks/Toaster";



export function Toaster() {
  const {message, duration, visible, onDismiss} = useToaster()
  return(
    <Snackbar 
      visible={visible}
      duration={duration}
      onDismiss={onDismiss}
      >
      {message}
    </Snackbar>
  )
}