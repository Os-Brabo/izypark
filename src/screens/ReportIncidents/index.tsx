import {
  collection,
  doc,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where
} from "firebase/firestore";
import React from "react";
import { v4 as uuid } from "uuid";
import { Alert } from "react-native";
import { Header } from "../../components/Header";
import { ReportIncidentForm } from "../../components/ReportIncidentForm";

import * as S from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function ReportIncident() {
  const firestore = getFirestore();
  const { user } = useAuth();

  async function handleSubmit(plate: string) {
    const q = query(collection(firestore, "cars"), where("plate", "==", plate));
    const querySnapshot = await getDocs(q);
    const results: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });
    if (!results.length) {
      return Alert.alert("Placa não encontrada");
    }
    await Promise.all(
      results.map(async (result) => {
        const id = uuid();
        await setDoc(doc(firestore, "incidents", id), {
          fromUserId: user?.uid,
          toUserId: result.userId
        });
      })
    );
    Alert.alert(
      "Incidente reportado",
      "Enviamos uma notificação para o proprietário do veículo, por favor aguarde"
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
