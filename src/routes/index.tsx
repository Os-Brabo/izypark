import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/Home";
const {Navigator, Screen} = createNativeStackNavigator()
export function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={Home} options={{headerShown:false}} />
      </Navigator>
    </NavigationContainer>
  )
}