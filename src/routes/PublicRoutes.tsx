import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native"
import { Login } from "../views/publicViews/Authenticate/Login"
import { SignUp } from "../views/publicViews/SignUp"


const Stack = createNativeStackNavigator()
export function PublicRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{
          headerBackground: () => (<View/>),
          headerTitle: ''
        }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerTitle: ''
        }} />
      </Stack.Navigator>
  )
}