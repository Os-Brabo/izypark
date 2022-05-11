import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native-paper";
import { FetchInstitutionsForm } from "../../components/FetchInstitutionsForm";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { Institution, InstitutionItem } from "./InstitutionItem";

export function Institutions() {
  const institutions: Institution[] = [
    { id: "1", name: "Institution 1", isFavorite: false },
    { id: "2", name: "Institution 2", isFavorite: true },
    { id: "3", name: "Institution 3", isFavorite: true },
    { id: "4", name: "Institution 4", isFavorite: false }
  ];
  const searchMadeOnce = false;

  return (
    <>
      <Header returnTo="Home" />
      <BlackTitle>Buscar Instituição</BlackTitle>
      <Spacer height={25} />
      <FetchInstitutionsForm />
      <Spacer height={25} />
      {/* list results */}
      {institutions.length === 0 ? (
        <Text style={{ textAlign: "center" }}>Nenhum resultado encontrado</Text>
      ) : (
        <FlatList
          style={{ paddingHorizontal: 30 }}
          data={institutions}
          renderItem={({ item }) => <InstitutionItem institution={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Spacer height={25} />}
        />
      )}
    </>
  );
}
