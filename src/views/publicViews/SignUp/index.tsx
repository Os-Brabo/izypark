import React from "react"
import { DefaultButton } from "../../../components/Buttons/DefaultButton"
import { FacebookButton } from "../../../components/Buttons/FacebookButton"
import { GithubButton } from "../../../components/Buttons/GithubButton"
import { GoogleButton } from "../../../components/Buttons/GoogleButton"
import * as S from '../styles'
export function SignUp() {
  function handleSubmit() {

  }
  return (
    <S.Background>
      <S.LoginTitle>Cadastrar</S.LoginTitle>
      <S.FieldContainer>
        <S.FieldLabel>E-mail</S.FieldLabel>
        <S.FieldInput />
      </S.FieldContainer>
      <S.FieldContainer>
        <S.FieldLabel>Senha</S.FieldLabel>
        <S.FieldInput />
      </S.FieldContainer>
      <S.FieldContainer>
        <S.FieldLabel>Confirmar Senha</S.FieldLabel>
        <S.FieldInput />
      </S.FieldContainer>
      <DefaultButton
        label='continuar' 
        onPress={handleSubmit} />
      
      <S.CenteredText>
        Ou continue com
      </S.CenteredText>
      <FacebookButton />
      <GoogleButton />
      <GithubButton />
      
        
    </S.Background> 
  )
}