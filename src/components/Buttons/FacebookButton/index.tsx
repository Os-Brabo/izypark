import React from 'react'
import * as S from './styles'
export function FacebookButton() {
  function handlePress() {

  }
  return (
    // @TODO - update touchableOpacity to RectButton
    <S.Container onPress={handlePress}>
      <S.Icon name="facebook-f" />
      <S.Text>Continuar com Facebook</S.Text>
    </S.Container>
  )

}