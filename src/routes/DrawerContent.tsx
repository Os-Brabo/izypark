import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/Home";
import { Vehicles } from "../screens/MyVehicles";
import { Store } from "../screens/Store";
const Drawer = createDrawerNavigator();
export function DrawerContent() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Vehicles"
        component={Vehicles}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Shop"
        component={Store}
        options={{ title: "Loja", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
