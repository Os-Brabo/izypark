import { format } from "date-fns";
import React from "react";
import { DangerButton } from "../../../components/Buttons/DangerButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
import { useBlocks } from "../../../hooks/useBlocks";
import { CenterText } from "./styles";

interface Props {
  place: {
    institutionId: string;
    blockId: string;
    parkedAt: Date;
    institutionName: string;
    blockName: string;
  };
}
export function ParkedPlace({ place }: Props) {
  const { exitBlock } = useBlocks();
  const since = format(place.parkedAt, "HH:mm");
  async function handleOutPlace() {
    console.log("quero sair da vaga");
    await exitBlock(place.blockId);
  }

  return (
    <>
      <BlackTitle style={{ marginBottom: 30 }}>Sair da Vaga?</BlackTitle>
      <BlackTitle style={{ marginBottom: 10 }}>
        {place.institutionName}
      </BlackTitle>
      <CenterText style={{ marginBottom: 10 }}>{place.blockName}</CenterText>
      <CenterText>Desde às {since}</CenterText>
      <DangerButton label="sair da vaga" onPress={handleOutPlace} />
    </>
  );
}
