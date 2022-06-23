import { format } from "date-fns";
import React from "react";
import { DangerButton } from "../../../components/Buttons/DangerButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
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
  const since = format(place.parkedAt, "HH:mm");
  function handleOutPlace() {
    console.log("quero sair da vaga");
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
