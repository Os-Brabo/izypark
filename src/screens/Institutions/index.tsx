import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { FetchInstitutionsForm } from "../../components/FetchInstitutionsForm";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { FormatedInstitution } from "../../contexts/InstitutionsContext";

import { useInstitution } from "../../hooks/useInstitution";
import { InstitutionItem } from "./InstitutionItem";

export function Institutions() {
  const [results, setResults] = React.useState<FormatedInstitution[]>([]);
  const { institutions, findInstitutions } = useInstitution();

  async function fetchInstitutions(searchTerm?: string): Promise<void> {
    if (!searchTerm || !searchTerm.length) {
      setResults(institutions);
      return;
    }
    const institutionsFound = await findInstitutions(searchTerm);
    setResults(institutionsFound);
  }

  useEffect(() => {
    fetchInstitutions();
  }, [institutions]);

  return (
    <>
      <Header returnTo="Home" />
      <BlackTitle>Buscar Instituição</BlackTitle>
      <Spacer height={25} />
      <FetchInstitutionsForm onSubmit={fetchInstitutions} />
      <Spacer height={25} />
      {/* list results */}
      {results.length === 0 ? (
        <Text style={{ textAlign: "center" }}>Nenhum resultado encontrado</Text>
      ) : (
        <FlatList
          style={{ paddingHorizontal: 30 }}
          data={results}
          renderItem={({ item }) => <InstitutionItem institution={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Spacer height={25} />}
        />
      )}
    </>
  );
}
