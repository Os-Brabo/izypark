import * as React from 'react';
import 'react-native-reanimated'

import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading'
import { Toaster } from './src/components/Toaster';
import { AppProvider } from './src/hooks';
import { Routes } from './src/routes';
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