import React from "react";

import { CreateVehicle } from "../screens/AddVehicle";
import { Institutions } from "../screens/Institutions";
import { DetailInstitutions } from "../screens/DetailInstitutions";
import { Store } from "../screens/Store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Purchases } from "../screens/Purchases";

const Stack = createNativeStackNavigator();

export function StackContent() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="Institutions.Store"
        component={Store}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Purchases"
        component={Purchases}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
