import React from "react";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { FieldInput, FieldLabel } from "../../components/shared/Form/styles";
import { FieldContainer } from "../publicViews/styles";

export function Institutions() {
  return (
    <>
      <Header returnTo="Home" />
      <BlackTitle>Buscar Instituição</BlackTitle>
      <FieldContainer>
        <FieldLabel>Instituição</FieldLabel>
        <FieldInput />
      </FieldContainer>
      <DefaultButton label="Buscar" onPress={() => {}} />
    </>
  );
}
