import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';




export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
  <Background>
    <View><Text>aaaa</Text></View>
  </Background>
  );
}
