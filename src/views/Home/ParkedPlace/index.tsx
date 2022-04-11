import React from "react";
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

  function handleOutPlace() {
    console.log('quero sair da vaga')
  }

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
      <DangerButton label="sair da vaga" onPress={handleOutPlace} />
        
    </>
  )
}