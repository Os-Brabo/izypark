import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DefaultButton } from "../../../components/Buttons/DefaultButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
import { Spacer } from "../../../components/shared/Spacer";
import { FavoriteInstitution } from "./Favoriteinstitution";
import * as S from "./styles";
interface Institution {
  title: string;
  id: string;
}
export function ListInstitutions() {
  const navigation = useNavigation();
  const favoriteInstitutions: Institution[] = [
    { title: "Facens", id: "1" },
    { title: "Uniso", id: "12" },
    { title: "Estádio Pacaembu", id: "3" },
    { title: "Estádio Pacaembu", id: "31" },
    { title: "Estádio Pacaembu", id: "32" },
    { title: "Estádio Pacaembu", id: "33" }
  ];
  function handleGetInstitutions() {
    navigation.navigate("Institutions.List");
  }
  return (
    <S.InstitutionsContainer>
      <View style={{ flex: 1 }}>
        <BlackTitle>Instituições</BlackTitle>
        <Spacer height={10} />
        <FlatList
          data={favoriteInstitutions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FavoriteInstitution title={item.title} />}
          ItemSeparatorComponent={() => <Spacer height={10} />}
        />
      </View>

      <DefaultButton label="Ver instituições" onPress={handleGetInstitutions} />
    </S.InstitutionsContainer>
  );
}
