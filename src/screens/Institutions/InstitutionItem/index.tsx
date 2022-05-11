import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as S from "./styles";
import { AntDesign, Feather } from "@expo/vector-icons";

export interface Institution {
  id: string;
  name: string;
  isFavorite: boolean;
}

interface Props {
  institution: Institution;
}

export function InstitutionItem({ institution }: Props) {
  const iconSize = 30;
  const [isFavorite, setIsFavorite] = React.useState(institution.isFavorite);
  function handleFavoriteItem() {
    setIsFavorite(!isFavorite);
  }
  return (
    <S.Container>
      <S.Titile>{institution.name}</S.Titile>
      <S.Actions>
        <TouchableOpacity onPress={handleFavoriteItem}>
          <AntDesign
            name={isFavorite ? "star" : "staro"}
            color={isFavorite ? "#FBBC05" : "#000"}
            size={iconSize}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="info" size={iconSize} color="black" />
        </TouchableOpacity>
      </S.Actions>
    </S.Container>
  );
}
