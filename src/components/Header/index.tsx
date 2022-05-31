import React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import Feather from "@expo/vector-icons/Feather";
import * as S from "./styles";
import { TouchableOpacity } from "react-native";

interface Props {
  returnTo?: string;
}
export function Header({ returnTo }: Props) {
  const navigation = useNavigation();
  function handleOpenMenu() {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  function handleReturn() {
    if (!returnTo) return;
    navigation.navigate({ name: returnTo });
  }
  return (
    <S.HeaderContainer>
      {returnTo && (
        <TouchableOpacity onPress={handleReturn}>
          <Feather name="arrow-left" size={32} color="white" />
        </TouchableOpacity>
      )}

      <S.MenuButton onPress={handleOpenMenu}>
        <Feather name="menu" size={32} color="white" />
      </S.MenuButton>
    </S.HeaderContainer>
  );
}
