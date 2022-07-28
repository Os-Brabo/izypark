import React from "react";
import { Alert } from "react-native";
import { Header } from "../../components/Header";
import { ReportIncidentForm } from "../../components/ReportIncidentForm";

import * as S from "./styles";

export function ReportIncident() {
  function handleSubmit() {
    console.log("submit");
    Alert.alert(
      "Enviado",
      "Obrigado por reportar o problema, aguarde alguns minutos até que se resolva"
    );
  }

  return (
    <S.Container>
      <Header />
      <S.ReportContainer>
        <S.Title>Resolução de Conflitos</S.Title>
        <S.Description>
          Caso tenha algum problema com outro veículo como por exemplo um
          bloqueio de passagem, insira a placa do veículo para enviar uma
          notificação ao dono
        </S.Description>

        <ReportIncidentForm onSubmit={handleSubmit} />
      </S.ReportContainer>
    </S.Container>
  );
}
