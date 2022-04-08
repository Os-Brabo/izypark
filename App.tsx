import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading'
// import { StatusBar, Text, View } from 'rea/ct-native';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';




export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  })
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
  <Background>
    <Routes/>
  </Background>
  );
}
