import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { About } from "../views/About";
import { Login } from "../views/publicViews/Authenticate/Login";
import { View } from "react-native";
import { SignUp } from "../views/publicViews/SignUp";
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
export function Routes() {
  const isAuthenticated = false
  
  return (
    <NavigationContainer>
     {isAuthenticated ? (
       <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Drawer.Screen name="Notifications" component={About} options={{headerShown:false}} />
      </Drawer.Navigator>
     ):(
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{
          headerBackground: () => (<View/>),
          headerTitle: ''
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerTitle: ''
        }} />
      </Stack.Navigator>
     )}
    </NavigationContainer>
  )
}