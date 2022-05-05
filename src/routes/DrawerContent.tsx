import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Home } from "../views/Home"
import { Vehicles } from "../views/MyVehicles"
import { Store } from "../views/Store"
const Drawer = createDrawerNavigator()
export function DrawerContent() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Drawer.Screen name="Vehicles" component={Vehicles} options={{ headerShown: false }} />
      <Drawer.Screen name="Shop" component={Store} options={{title: "Loja", headerShown: false}} />
    </Drawer.Navigator>
  )
}