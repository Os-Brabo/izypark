import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Purchases } from "../screens/Purchases";
import { Home } from "../screens/Home";
import { Vehicles } from "../screens/MyVehicles";
import { Raking } from "../screens/Raking";
import { StackContent } from "./StackContent";
import { ReportIncident } from "../screens/ReportIncidents";
import { useAuth } from "../hooks/useAuth";

const Drawer = createDrawerNavigator();

function SignOut() {
  const auth = useAuth();
  auth.signOut();
  return null;
}

export function PrivateRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Veículos"
        component={Vehicles}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Compras"
        component={Purchases}
        options={{ title: "Compras", headerShown: false }}
      />
      <Drawer.Screen
        name="Ranking"
        component={Raking}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Conflitos"
        component={ReportIncident}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Sair"
        component={SignOut}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Stack"
        component={StackContent}
        options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
      />
    </Drawer.Navigator>
  );
}
