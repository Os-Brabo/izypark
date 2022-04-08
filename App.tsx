import 'react-native-reanimated'
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
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
