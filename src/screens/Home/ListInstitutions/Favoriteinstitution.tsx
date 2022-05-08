import React from "react";
import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  title: string;
}

export function FavoriteInstitution({ title }: Props) {
  return (
    <S.FavoriteInstitutionContainer>
      <S.FavoriteInstitutionTitle>{title}</S.FavoriteInstitutionTitle>
      <AntDesign name="right" size={26} color="white" />
    </S.FavoriteInstitutionContainer>
  );
}
