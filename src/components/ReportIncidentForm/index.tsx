import React from "react";
import { Keyboard, Text, View } from "react-native";
import { Formik, FormikHelpers } from "formik";
import { FieldContainer, FieldInput, FieldLabel } from "../shared/Form/styles";
import { DefaultButton } from "../Buttons/DefaultButton";
import * as S from "./styles";

type Props = {
  onSubmit: (carPlate: string) => void;
};

type FormValues = { carPlate: string };
type FormHelpers = FormikHelpers<FormValues>;
export function ReportIncidentForm({ onSubmit }: Props) {
  const initialValues = { carPlate: "" };
  function handleSubmit({ carPlate }: FormValues, { resetForm }: FormHelpers) {
    Keyboard.dismiss();
    onSubmit(carPlate);
    resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} re>
      {({ handleSubmit, handleBlur, handleChange, values, errors }) => (
        <S.Container>
          <FieldContainer>
            <FieldLabel>Problema com outro veículo</FieldLabel>
            <FieldInput
              placeholder="Placa do veículo"
              value={values.carPlate}
              onChangeText={handleChange("carPlate")}
              onBlur={handleBlur("carPlate")}
            />
            <Text>{errors.carPlate}</Text>
          </FieldContainer>
          <DefaultButton label="Enviar" onPress={handleSubmit} />
        </S.Container>
      )}
    </Formik>
  );
}
