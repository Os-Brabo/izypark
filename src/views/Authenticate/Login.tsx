import React from 'react'
import styled from 'styled-components/native'
import { DefaultButton } from '../../components/Buttons/DefaultButton'
import { FacebookButton } from '../../components/Buttons/FacebookButton'
import { GithubButton } from '../../components/Buttons/GithubButton'
import { GoogleButton } from '../../components/Buttons/GoogleButton'

import * as S from './styles'

export function Login() {
  function handleSubmint() {
    console.log('submit')
  }
  return (
    <S.Background>
      <S.LoginTitle>Entrar</S.LoginTitle>

      <S.FieldContainer>
        <S.FieldLabel>E-mail</S.FieldLabel>
        <S.FieldInput />
      </S.FieldContainer>

      <S.FieldContainer>
        <S.FieldLabel>Senha</S.FieldLabel>
        <S.FieldInput />
      </S.FieldContainer>
      <DefaultButton 
        label='continuar' 
        onPress={handleSubmint} />
      <S.CenteredText>
        Ainda não tem conta? Cadastrar
      </S.CenteredText>
      <S.CenteredText>
        Ou continue com
      </S.CenteredText>
      <FacebookButton />
      <GoogleButton />
      <GithubButton />
      
        
    </S.Background>
  )
}