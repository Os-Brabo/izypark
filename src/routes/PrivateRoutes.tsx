import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DrawerContent } from "./DrawerContent"
import { CreateVehicle } from "../views/AddVehicle"
const Stack = createNativeStackNavigator()

export function PrivateRoutes() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={DrawerContent} options={{headerShown:false}} />
      <Stack.Screen name="Vehicles.Create" component={CreateVehicle} options={{headerShown: false}}/>
      
    </Stack.Navigator>
  )
}