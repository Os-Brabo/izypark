import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

const Stack = createNativeStackNavigator()
export function Routes() {
  const isAuthenticated = false
  
  return (
    <NavigationContainer>
      { isAuthenticated ? <PrivateRoutes /> : <PublicRoutes /> }
    </NavigationContainer>
  )
}