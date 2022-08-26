import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { View } from "react-native";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import {
  FieldContainer,
  FieldInput,
  FieldLabel,
  FormContainer
} from "../../components/shared/Form/styles";
import { useVehicle } from "../../hooks/useVehicle";
import { useToaster } from "../../hooks/Toaster";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const createVehicleSchema = Yup.object().shape({
  plate: Yup.string()
    // .matches(/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/, "Placa inválida")
    .required(),
  model: Yup.string().required(),
  color: Yup.string().required()
});

interface Fields {
  plate: string;
  model: string;
  color: string;
}

export function CreateVehicle() {
  const toast = useToaster();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { create } = useVehicle();

  const initialValues = {
    color: "",
    model: "",
    plate: ""
  };
  async function handleSubmit(data: Fields) {
    const response = await create(data);
    if (response.isLeft()) {
      console.log(response.value);
      return;
    }
    toast.showToaster("Cadastro realizado com sucesso!", 400);
    navigation.navigate("Vehicles");
  }

  return (
    <View style={{ flex: 1 }}>
      <Header returnTo="Vehicles" />
      <BlackTitle>Cadastrar um Veículo</BlackTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={createVehicleSchema}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <FormContainer>
            <FieldContainer>
              <FieldLabel>Placa</FieldLabel>
              <FieldInput
                value={values.plate}
                onChangeText={handleChange("plate")}
                onBlur={handleBlur("plate")}
                placeholder="Digite a placa do veículo"
              />
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Modelo</FieldLabel>
              <FieldInput
                value={values.model}
                onChangeText={handleChange("model")}
                onBlur={handleBlur("model")}
                placeholder="Digite o modelo do veículo"
              />
            </FieldContainer>
            <FieldContainer>
              <FieldLabel>Cor</FieldLabel>
              <FieldInput
                value={values.color}
                onChangeText={handleChange("color")}
                onBlur={handleBlur("color")}
                placeholder="Digite a cor do veículo"
              />
            </FieldContainer>
            <View style={{ flex: 1 }}></View>
            <DefaultButton label="Cadastrar" onPress={handleSubmit} />
            <View style={{ height: 50 }} />
          </FormContainer>
        )}
      </Formik>
    </View>
  );
}
