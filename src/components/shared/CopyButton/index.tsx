import React from "react";
import { Ionicons } from "@expo/vector-icons"
import * as S from "./styles"
import { Text } from "react-native";
interface Props {
  children: React.ReactNode;
  handleCopy: () => string;
}
export function CopyButton() {
  return (
    <S.CopyButton>
      <Ionicons name="copy" size={24} color="black" />
      <Text>copiar</Text>
    </S.CopyButton>
  )
}