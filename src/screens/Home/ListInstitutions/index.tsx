import React from "react";
import { DefaultButton } from "../../../components/Buttons/DefaultButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
import * as S from "./styles";
export function ListInstitutions() {
  function handleAddInstitution() {}
  return (
    <S.InstitutionsContainer>
      <BlackTitle>Instituições</BlackTitle>
      <DefaultButton label="adicionar" onPress={handleAddInstitution} />
    </S.InstitutionsContainer>
  );
}
