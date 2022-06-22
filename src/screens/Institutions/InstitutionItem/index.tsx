import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as S from "./styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export interface Institution {
  id: string;
  name: string;
  isFavorite: boolean;
}

interface Props {
  institution: Institution;
}

export function InstitutionItem({ institution }: Props) {
  const navigation = useNavigation();
  const iconSize = 30;
  const [isFavorite, setIsFavorite] = React.useState(institution.isFavorite);
  function handleFavoriteItem() {
    setIsFavorite(!isFavorite);
  }
  function handleNavigateToDetail() {
    navigation.navigate("Institutions.Detail" as never, {} as never);
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
        <TouchableOpacity onPress={handleNavigateToDetail}>
          <Feather name="info" size={iconSize} color="#3af" />
        </TouchableOpacity>
      </S.Actions>
    </S.Container>
  );
}
