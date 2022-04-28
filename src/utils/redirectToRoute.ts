import { useNavigation } from '@react-navigation/native';
export function redirectTo(route: string):void {
  const navigation = useNavigation()
  navigation.navigate({ name: route })
}