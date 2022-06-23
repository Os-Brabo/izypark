import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { Header } from "../../components/Header";
import { CenterBoldText } from "../../components/shared/Atoms";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { useBlocks } from "../../hooks/useBlocks";
import { useInstitution } from "../../hooks/useInstitution";
import { Block } from "./Block";

interface ParkingBlock {
  id: string;
  name: string;
  vacancies: number;
  availableNow: number;
}
interface Institution {
  title: string;
  parkingBlocks: ParkingBlock[];
}
export function DetailInstitutions() {
  const { currentInstitution } = useInstitution();
  const { blocks, isLoading } = useBlocks();
  const [institution, setInstitution] = useState<Institution>({});

  useEffect(() => {
    if (!currentInstitution) return;
    if (!blocks) {
      setInstitution({
        title: currentInstitution.name,
        parkingBlocks: []
      });
      return;
    }

    const blocksFromated: ParkingBlock[] = blocks.map((block) => {
      return {
        id: block.id,
        name: block.name,
        vacancies: block.vacancies,
        availableNow: block.availableNow
      };
    });
    setInstitution({
      title: currentInstitution.name,
      parkingBlocks: blocksFromated
    });
  }, [isLoading]);

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
