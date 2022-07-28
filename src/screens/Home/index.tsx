import React from "react";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";
import { ListInstitutions } from "./ListInstitutions";
import { ParkedPlace } from "./ParkedPlace";
import * as S from "./styles";

export function Home() {
  const { userData } = useAuth();
  const economizedGaz = userData.savedGaz.toFixed(1);
  const availableCoins = userData.coins;
  const parkedPlace = userData.parkedAt;

  return (
    <S.Container>
      <Header />
      <S.TopContainer>
        <S.DefaultTitle>{economizedGaz}</S.DefaultTitle>
        <S.CO2Description>Gramas de CO2 economizados</S.CO2Description>
        <S.DefaultTitle>{availableCoins}</S.DefaultTitle>
        <S.AvailableCoins>Moedas Disponíveis</S.AvailableCoins>
      </S.TopContainer>
      <S.BottomContainer>
        {!parkedPlace ? (
          <ListInstitutions />
        ) : (
          <ParkedPlace place={parkedPlace} />
        )}
      </S.BottomContainer>
    </S.Container>
  );
}
