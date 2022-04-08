import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading'
import { StatusBar, Text, View } from 'react-native';
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
    <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
    />
    <View><Text>aaaa</Text></View>
  </Background>
  );
}
