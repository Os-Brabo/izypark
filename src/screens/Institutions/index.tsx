import React from "react";
import { Text } from "react-native-paper";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { FetchInstitutionsForm } from "../../components/FetchInstitutionsForm";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { FieldInput, FieldLabel } from "../../components/shared/Form/styles";
import { Spacer } from "../../components/shared/Spacer";
import { FieldContainer } from "../publicViews/styles";

export function Institutions() {
  const institutions = [];
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
        <Text>resultados</Text>
      )}
    </>
  );
}
