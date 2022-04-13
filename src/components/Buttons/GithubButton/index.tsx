import React from 'react'
import * as S from './styles'
export function GithubButton() {
  function handlePress() {

  }
  return (
    // @TODO - update touchableOpacity to RectButton
    <S.Container onPress={handlePress}>
      <S.Icon name="github" />
      <S.Text>Continuar com Github</S.Text>
    </S.Container>
  )

}