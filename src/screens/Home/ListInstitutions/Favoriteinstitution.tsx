import React from "react";
import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useInstitution } from "../../../hooks/useInstitution";

interface Props {
  title: string;
  id: string;
}

export function FavoriteInstitution({ title, id }: Props) {
  const { selectInstitution } = useInstitution();
  const navigation = useNavigation();
  function handleNavigateToDetail() {
    selectInstitution(id);
    navigation.navigate("Institutions.Detail" as never, {} as never);
  }
  return (
    <S.FavoriteInstitutionContainer onPress={handleNavigateToDetail}>
      <S.FavoriteInstitutionTitle>{title}</S.FavoriteInstitutionTitle>
      <AntDesign name="right" size={26} color="white" />
    </S.FavoriteInstitutionContainer>
  );
}
