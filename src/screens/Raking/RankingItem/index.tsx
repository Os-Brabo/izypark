import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import * as S from "./styles";

interface Props {
  name: string;
  amount: number;
  id: string;
}
export function CarbonSavedItem({ amount, name, id }: Props) {
  const { userData } = useAuth();
  const isCurrentUser = userData.id === id;
  const userName = isCurrentUser ? `${name} (me)` : name;
  return (
    <S.ItemContainer isCurrent={isCurrentUser}>
      <S.ItemText>{userName}</S.ItemText>
      <S.ItemText>{amount}g</S.ItemText>
    </S.ItemContainer>
  );
}
