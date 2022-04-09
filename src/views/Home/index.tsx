import React from "react";
import { Header } from '../../components/Header'
import { BlackTitle } from "../../components/shared/BlackTitle";
import {styles} from './styles'


export function Home() {
  const economizedGaz = 128.18
  const availableCoins = 35
  return(
    <>
      <styles.TopContainer>
        <Header />
        <styles.CO2Container>
          <styles.DefaultTitle >{economizedGaz}</styles.DefaultTitle>
          <styles.CO2Description>
            Gramas de CO2 economizados
          </styles.CO2Description>
        </styles.CO2Container>
        <styles.DefaultTitle>{availableCoins}</styles.DefaultTitle>
        <styles.AvailableCoins>Moedas Disponíveis</styles.AvailableCoins>
      </styles.TopContainer>
      <styles.BottomContainer>
        <BlackTitle>Instituições</BlackTitle>
        
      </styles.BottomContainer>
    </>
  )
}