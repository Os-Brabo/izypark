import React from 'react';
import 'react-native-reanimated'

import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading'
import { Toaster } from './src/components/Toaster';
import { AppProvider } from './src/hooks';
import { Routes } from './src/routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoBlack: Roboto_700Bold,
    RobotoMedium: Roboto_500Medium
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AppProvider>
      <Routes />
      <Toaster/>
    </AppProvider>
  )

  
}