import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { FieldContainer, FieldInput, FieldLabel } from "../shared/Form/styles";
import { DefaultButton } from "../Buttons/DefaultButton";

type Props = {
  onSubmit: (carPlate: string) => void;
};

export function ReportIncidentForm({ onSubmit }: Props) {
  const initialValues = { carPlate: "" };
  function handleOnSubmit({ carPlate }: { carPlate: string }) {
    onSubmit(carPlate);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      {({ handleSubmit, handleBlur, handleChange, values, errors }) => (
        <View>
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
        </View>
      )}
    </Formik>
  );
}
