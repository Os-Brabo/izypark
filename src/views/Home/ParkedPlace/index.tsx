import React from "react";
import { Text } from "react-native";
import { DangerButton } from "../../../components/Buttons/DangerButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
import {CenterText} from './styles'

interface Props {
  place: {
    institution: string;
    block: string
    parkedAt: string
  }
}
export function ParkedPlace({place}: Props) {
  return (
    <>
      <BlackTitle
        style={{ marginBottom: 30}}
      >
        Sair da Vaga?
      </BlackTitle>
      <BlackTitle style={{ marginBottom: 10}}>{place.institution}</BlackTitle>
      <CenterText style={{ marginBottom: 10}}>{place.block}</CenterText>
      <CenterText>Desde às {place.parkedAt}</CenterText>
      <DangerButton>
        <Text>sair da vaga</Text>
      </DangerButton>
    </>
  )
}