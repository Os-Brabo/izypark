import 'react-native-reanimated'
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/views/Home';
import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading'
import { About } from './src/views/About';

const Drawer = createDrawerNavigator();

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
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Drawer.Screen name="Notifications" component={About} options={{headerShown:false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// // import 'react-native-gesture-handler'
// // import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
// // import AppLoading from 'expo-app-loading'
// // import { StatusBar, Text, View } from 'rea/ct-native';
// import { Background } from './src/components/Background';
// // import { Routes } from './src/routes';
// import {createDrawerNavigator} from '@react-navigation/drawer'
// import { NavigationContainer } from '@react-navigation/native';
// import { Home } from './src/views/Home';
// import {About} from './src/views/About';

// const Drawer = createDrawerNavigator()

// export default function App() {
//   // let [fontsLoaded] = useFonts({
//   //   Roboto_400Regular,
//   // })
//   // if (!fontsLoaded) {
//   //   return <AppLoading />;
//   // }
//   return (
//   <Background>
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName='Home'>
//         <Drawer.Screen name='Home' component={Home} />
//         <Drawer.Screen name='About' component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>

//     {/* <Routes/> */}
//   </Background>
//   );
// }
