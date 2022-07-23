import React, { useState } from "react";
import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useInstitution } from "../../../hooks/useInstitution";
import { ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Props {
  title: string;
  id: string;
}

export function FavoriteInstitution({ title, id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { selectInstitution } = useInstitution();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  async function handleNavigateToDetail() {
    setIsLoading(true);
    try {
      await selectInstitution(id);
      navigation.navigate("Stack", { screen: "Institutions.Detail" });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <S.FavoriteInstitutionContainer onPress={handleNavigateToDetail}>
      {isLoading && <ActivityIndicator size="small" color="#fff" />}
      {!isLoading && (
        <>
          <S.FavoriteInstitutionTitle>{title}</S.FavoriteInstitutionTitle>
          <AntDesign name="right" size={26} color="white" />
        </>
      )}
    </S.FavoriteInstitutionContainer>
  );
}
