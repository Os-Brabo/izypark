import React from "react";
import { View, Text, FlatList } from "react-native";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { CenterBoldText } from "../../components/shared/Atoms";
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
      },
      {
        id: "2",
        name: "Bloco B",
        createdAt: new Date(),
        availableNow: 15,
        vacancies: 30
      },
      {
        id: "3",
        name: "Bloco C",
        createdAt: new Date(),
        availableNow: 18,
        vacancies: 20
      },
      {
        id: "4",
        name: "Bloco C",
        createdAt: new Date(),
        availableNow: 18,
        vacancies: 20
      },
      {
        id: "5",
        name: "Bloco C",
        createdAt: new Date(),
        availableNow: 18,
        vacancies: 20
      },
      {
        id: "6",
        name: "Bloco j",
        createdAt: new Date(),
        availableNow: 18,
        vacancies: 20
      }
    ]
  };
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <BlackTitle>{institution.title}</BlackTitle>
      <BlackTitle>Vagas disponíveis por bloco</BlackTitle>
      <CenterBoldText>
        Após estacionar, selecione o bloco onde parou
      </CenterBoldText>
      <Spacer height={15} />
      <FlatList
        data={institution.parkingBlocks}
        style={{
          elevation: 12,
          paddingHorizontal: 15
        }}
        ItemSeparatorComponent={() => <Spacer height={10} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Block block={item} />}
      />
      <View style={{ flexBasis: "25%" }}>
        <DefaultButton label="loja da instituição" onPress={() => { }} />
        <DefaultButton label="loja da instituição" onPress={() => { }} />
      </View>
    </View>
  );
}
