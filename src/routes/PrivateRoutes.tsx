import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerContent } from "./DrawerContent";
import { CreateVehicle } from "../screens/AddVehicle";
import { Institutions } from "../screens/Institutions";
import { DetailInstitutions } from "../screens/DetailInstitutions";
const Stack = createNativeStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Drawer"
        component={DrawerContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Vehicles.Create"
        component={CreateVehicle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Institutions.List"
        component={Institutions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Institutions.Detail"
        // key="Institutions.Detail"
        component={DetailInstitutions}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
