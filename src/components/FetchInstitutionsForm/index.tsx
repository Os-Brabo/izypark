import { Formik } from "formik";
import React from "react";
import { Keyboard } from "react-native";
import { DefaultButton } from "../Buttons/DefaultButton";
import { FieldContainer, FieldInput, FieldLabel } from "../shared/Form/styles";
import * as S from "./styles";
export function FetchInstitutionsForm() {
  const initialValues = { searchTerm: "" };
  function handleSubmit() {
    console.log("submit");
    Keyboard.dismiss();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, handleBlur, values }) => (
        <S.FormContainer>
          <FieldContainer>
            <FieldLabel>Instituição</FieldLabel>
            <FieldInput />
          </FieldContainer>
          <DefaultButton label="Buscar" onPress={handleSubmit} />
        </S.FormContainer>
      )}
    </Formik>
  );
}
