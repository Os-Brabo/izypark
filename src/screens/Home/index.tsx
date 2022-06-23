import React from "react";
import { Header } from "../../components/Header";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { useAuth } from "../../hooks/useAuth";
import { ListInstitutions } from "./ListInstitutions";
import { ParkedPlace } from "./ParkedPlace";
import * as S from "./styles";

export function Home() {
  const { userData } = useAuth();

  const economizedGaz = 128.18;
  const availableCoins = 35;

  const parkedPlace = userData?.parkedAt;
  /**
   * {
    institution: "Facens",
    block: "Bloco A",
    parkedAt: "10:00"
  };
   */
  return (
    <>
      <S.TopContainer>
        <Header />
        <S.CO2Container>
          <S.DefaultTitle>{economizedGaz}</S.DefaultTitle>
          <S.CO2Description>Gramas de CO2 economizados</S.CO2Description>
        </S.CO2Container>
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
    </>
  );
}
