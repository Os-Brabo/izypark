import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer";
import { Home } from "../screens/Home";
import { Vehicles } from "../screens/MyVehicles";
import { Raking } from "../screens/Raking";
import { useAuth } from "../hooks/useAuth";
import { Purchases } from "../screens/Purchases";
const Drawer = createDrawerNavigator();
export function DrawerContent() {
  const auth = useAuth();
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Sair" onPress={() => auth.signOut()} />
          </DrawerContentScrollView>
        );
      }}
    >
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
        name="Purchases"
        component={Purchases}
        options={{ title: "Compras", headerShown: false }}
      />
      <Drawer.Screen
        name="Ranking"
        component={Raking}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
