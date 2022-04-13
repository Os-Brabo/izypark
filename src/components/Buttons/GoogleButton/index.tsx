import React from "react";
import * as S from './styles'
import googleLogoImg from '../../../assets/google-logo.png'
export function GoogleButton() {
  function handlePress() {}
  return(
    <S.Container onPress={handlePress}>
      <S.Image source={googleLogoImg} resizeMode="contain" />
      <S.Text>Continuar com Google</S.Text>
    </S.Container>
  )
}