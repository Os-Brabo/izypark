import React, { useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useInstitution } from "../../../hooks/useInstitution";
import { useAuth } from "../../../hooks/useAuth";

export interface Institution {
  id: string;
  name: string;
  isFavorite: boolean;
}

interface Props {
  institution: Institution;
}

export function InstitutionItem({ institution }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { favoriteInstitution } = useAuth();
  const navigation = useNavigation();
  const { selectInstitution } = useInstitution();
  const iconSize = 30;
  const [isFavorite, setIsFavorite] = React.useState(institution.isFavorite);

  async function handleFavoriteItem() {
    setIsLoading(true);
    try {
      await favoriteInstitution(institution.id);
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  async function handleNavigateToDetail() {
    setIsLoading(true);
    try {
      await selectInstitution(institution.id);
      navigation.navigate("Institutions.Detail" as never, {} as never);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <S.Container>
      <S.Titile>{institution.name}</S.Titile>
      <S.Actions>
        {isLoading && <ActivityIndicator size="small" color="#000" />}
        {!isLoading && (
          <>
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
          </>
        )}
      </S.Actions>
    </S.Container>
  );
}
