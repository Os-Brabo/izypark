import React from "react";
import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
}

export function FavoriteInstitution({ title }: Props) {
  const navigation = useNavigation();
  function handleNavigateToDetail() {
    navigation.navigate("Institutions.Detail" as never, {} as never);
  }
  return (
    <S.FavoriteInstitutionContainer onPress={handleNavigateToDetail}>
      <S.FavoriteInstitutionTitle>{title}</S.FavoriteInstitutionTitle>
      <AntDesign name="right" size={26} color="white" />
    </S.FavoriteInstitutionContainer>
  );
}
