import React from "react";
import { Text } from "react-native";
import { Header } from "../../components/Header";
import { ReportIncidentForm } from "../../components/ReportIncidentForm";
import { BlackTitle } from "../../components/shared/BlackTitle";

import * as S from "./styles";

export function ReportIncident() {
  return (
    <>
      <Header />
      <BlackTitle>Resolução de Conflitos</BlackTitle>
      <S.ReportContainer>
        <Text>
          Caso tenha algum problema com outro veículo como por exemplo um
          bloqueio de passagem, insira a placa do veículo para enviar uma
          notificação ao dono
        </Text>

        <ReportIncidentForm />
      </S.ReportContainer>
    </>
  );
}
