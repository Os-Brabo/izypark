import React from "react";
import { View, Text, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { Block } from "./Block";

interface ParkingBlock {
  id: string;
  name: string;
  vacancies: number;
  availableNow: number;
  createdAt: Date;
}
interface Institution {
  title: string;
  parkingBlocks: ParkingBlock[];
}
export function DetailInstitutions() {
  const institution: Institution = {
    title: "Facens",
    parkingBlocks: [
      {
        id: "1",
        name: "Bloco A",
        createdAt: new Date(),
        availableNow: 1,
        vacancies: 5
      }
    ]
  };
  return (
    <View>
      <Header />
      <BlackTitle>{institution.title}</BlackTitle>
      <BlackTitle>Vagas disponíveis por bloco</BlackTitle>
      <Text>Após estacionar, selecione o bloco onde parou</Text>
      <Spacer height={25} />
      <FlatList
        data={institution.parkingBlocks}
        style={{ padding: 15 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Block block={item} />}
      />
    </View>
  );
}
