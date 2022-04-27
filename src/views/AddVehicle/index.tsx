import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
export function CreateVehicle() {
  return (
    <View>
      <Header returnTo="Vehicles" />
      <BlackTitle>Cadastrar um Veículo</BlackTitle>
    </View>
  )
}