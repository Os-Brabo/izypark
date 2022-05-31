import React from "react";
import "react-native-reanimated";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium
} from "@expo-google-fonts/roboto";

import { Toaster } from "./src/components/Toaster";
import { AppProvider } from "./src/hooks";
import { Routes } from "./src/routes";

import "./src/services/firebase";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoBlack: Roboto_700Bold,
    RobotoMedium: Roboto_500Medium
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AppProvider>
      <Routes />
      <Toaster />
    </AppProvider>
  );
}
