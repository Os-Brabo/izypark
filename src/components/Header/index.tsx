import React from "react";
import {useNavigation, DrawerActions} from '@react-navigation/native'

import Feather from '@expo/vector-icons/Feather'
import styled from 'styled-components/native';
import * as S from './styles'
const Button = styled.TouchableOpacity`
  margin-left: auto;
`
export function Header() {
  const navigation = useNavigation();
  function handleOpenMenu () {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  return (
    <S.HeaderContainer>
      <Button onPress={handleOpenMenu}>
        <Feather name="menu" size={32} color="white" />
      </Button>
    </S.HeaderContainer>
  )
}