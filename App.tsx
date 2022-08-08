import React, { useCallback, useEffect } from "react";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium
} from "@expo-google-fonts/roboto";

import { Toaster } from "./src/components/Toaster";
import { AppProvider } from "./src/hooks";
import { Routes } from "./src/routes";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";

const firebaseConfig = {
  apiKey: "AIzaSyCuYO94ZTBUyqetY0Sz759L_Ly0iA7X41I",
  authDomain: "izipark-5b433.firebaseapp.com",
  databaseURL: "https://izipark-5b433-default-rtdb.firebaseio.com",
  projectId: "izipark-5b433",
  storageBucket: "izipark-5b433.appspot.com",
  messagingSenderId: "882850359819",
  appId: "1:882850359819:web:fd524edc2d4a3925c8b50e",
  measurementId: "G-11B9GYRDQL"
};

export const app = initializeApp(firebaseConfig);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoBlack: Roboto_700Bold,
    RobotoMedium: Roboto_500Medium
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
        <Toaster />
      </AppProvider>
    </ThemeProvider>
  );
}
