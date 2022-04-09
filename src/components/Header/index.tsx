import React from "react";
import {useNavigation, DrawerActions} from '@react-navigation/native'
import { View } from 'react-native';
import Feather from '@expo/vector-icons/Feather'
import styled from 'styled-components/native';
const Button = styled.TouchableOpacity`
  margin-left: auto;
`
export function Header() {
  const navigation = useNavigation();
  function handleOpenMenu () {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <View>
      <Button onPress={handleOpenMenu}>
        <Feather name="menu" size={32} color="white" />
      </Button>
    </View>
  )
}