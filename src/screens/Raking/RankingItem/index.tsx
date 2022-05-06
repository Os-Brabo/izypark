import React from "react";
import * as S from "./styles";

interface Props {
  name: string;
  amount: number;
}
export function CarbonSavedItem({ amount, name }: Props) {
  return (
    <S.ItemContainer>
      <S.ItemText>{name}</S.ItemText>
      <S.ItemText>{amount}g</S.ItemText>
    </S.ItemContainer>
  );
}
