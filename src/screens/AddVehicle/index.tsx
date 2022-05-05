import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { FieldContainer, FieldInput, FieldLabel, FormContainer } from "../../components/shared/Form/styles";
// import * as S from "";
export function CreateVehicle() {
  function handleSubmit() {}
  const initialValues = {
    color: '',
    model: '',
    plate: '',
  }
  return (
    <View style={{flex: 1}}>
      <Header returnTo="Vehicles" />
      <BlackTitle>Cadastrar um Veículo</BlackTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}>
        {({handleSubmit}) => (
          <FormContainer>
            <FieldContainer>
              <FieldLabel>Placa</FieldLabel>
              <FieldInput />
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Modelo</FieldLabel>
              <FieldInput />
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Cor</FieldLabel>
              <FieldInput />
            </FieldContainer>
            <View style={{flex: 1}}></View>
            <DefaultButton
              label="Cadastrar"
              onPress={handleSubmit}
            />
            <View style={{height: 50}} />
          </FormContainer>
        )}
      </Formik>
    </View>
  )
}