import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Vehicle } from "../../components/Vehicles/Vehicle";
import { useVehicle } from "../../hooks/useVehicle";
import * as S from "./styles";
export type VehicleData = {
  id: string;
  plate: string;
  model: string;
  color: string;
};

export function Vehicles() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  function handleRouteRedirect() {
    navigation.navigate("Stack", { screen: "Vehicles.Create" });
  }
  const { data: vehicles } = useVehicle();

  return (
    <>
      <Header />
      <BlackTitle>Meus Veículos</BlackTitle>
      <S.vehiclesList
        data={vehicles}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69 }}
        renderItem={({ item }) => <Vehicle data={item} />}
      />
      <DefaultButton
        label="Adicionar novo Veículo"
        onPress={handleRouteRedirect}
      />
    </>
  );
}
