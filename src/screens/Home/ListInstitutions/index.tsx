import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DefaultButton } from "../../../components/Buttons/DefaultButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
import { Spacer } from "../../../components/shared/Spacer";
import { useInstitution } from "../../../hooks/useInstitution";
import { FavoriteInstitution } from "./Favoriteinstitution";
import * as S from "./styles";

export function ListInstitutions() {
  const { favoriteInstitutions } = useInstitution();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const institutions = favoriteInstitutions();
  function handleGetInstitutions() {
    navigation.navigate("Stack", { screen: "Institutions.List" });
  }
  return (
    <S.InstitutionsContainer>
      <View style={{ flex: 1 }}>
        <BlackTitle>Instituições</BlackTitle>
        <Spacer height={10} />
        <FlatList
          data={institutions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FavoriteInstitution title={item.name} id={item.id} />
          )}
          ItemSeparatorComponent={() => <Spacer height={10} />}
        />
      </View>

      <DefaultButton label="Ver instituições" onPress={handleGetInstitutions} />
    </S.InstitutionsContainer>
  );
}
