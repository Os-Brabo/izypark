import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Text } from "react-native-paper";
import { FetchInstitutionsForm } from "../../components/FetchInstitutionsForm";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { useAuth } from "../../hooks/useAuth";
import { useInstitution } from "../../hooks/useInstitution";
import { Institution, InstitutionItem } from "./InstitutionItem";

export function Institutions() {
  const { institutions } = useInstitution();
  const { userData } = useAuth();

  const [formatedInstitutions, setFormatedInstitutions] = useState<
    Institution[]
  >([]);
  function isFavorite(id: string): boolean {
    const favoriteInstitutions = userData?.favoriteInstitutions;
    const favorite = favoriteInstitutions?.find(
      (institutionId) => institutionId === id
    );
    return Boolean(favorite);
  }
  useEffect(() => {
    const formatted: Institution[] = institutions.map((institution) => {
      return {
        id: institution.id,
        isFavorite: isFavorite(institution.id),
        name: institution.name
      };
    });
    setFormatedInstitutions(formatted);
  }, [institutions]);

  const searchMadeOnce = false;
  // TODO: Debounce on search institution

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
