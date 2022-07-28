import { Formik } from "formik";
import React from "react";
import { Keyboard } from "react-native";
import { useInstitution } from "../../hooks/useInstitution";
import { DefaultButton } from "../Buttons/DefaultButton";
import { FieldContainer, FieldInput, FieldLabel } from "../shared/Form/styles";
import * as S from "./styles";

type Props = {
  onSubmit: (term: string) => void;
};
export function FetchInstitutionsForm({ onSubmit }: Props) {
  const initialValues = { searchTerm: "" };

  function handleSubmit(values: typeof initialValues) {
    onSubmit(values.searchTerm);
    Keyboard.dismiss();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, values }) => (
        <S.FormContainer>
          <FieldContainer>
            <FieldLabel>Instituição</FieldLabel>
            <FieldInput
              value={values.searchTerm}
              onChangeText={handleChange("searchTerm")}
            />
          </FieldContainer>
          <DefaultButton label="Buscar" onPress={handleSubmit} />
        </S.FormContainer>
      )}
    </Formik>
  );
}
