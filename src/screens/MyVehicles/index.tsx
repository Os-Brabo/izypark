import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Vehicle } from "../../components/Vehicles/Vehicle";
import { useVehicle } from "../../hooks/useVehicle";
import * as S from "./styles";
type VehicleData = {
  id: string;
  plate: string;
  model: string;
  color: string;
};

export function Vehicles() {
  const navigation = useNavigation();
  function handleRouteRedirect() {
    navigation.navigate("Vehicles.Create");
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
        // ItemSeparatorComponent={ListDivider}
        contentContainerStyle={{ paddingBottom: 69 }}
        renderItem={({ item }) => <Vehicle data={item as VehicleData} />}
      />
      <DefaultButton
        label="Adicionar novo Veículo"
        onPress={handleRouteRedirect}
      />
    </>
  );
}
