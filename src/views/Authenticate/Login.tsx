import React from 'react'
import styled from 'styled-components/native'
import { DefaultButton } from '../../components/Buttons/DefaultButton'

const Background = styled.View`
  background-color: #fff;
  flex:1;
  align-items: center;
  padding: 15px;
`
const LoginTitle = styled.Text`
  margin-top: 71px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  font-family: 'RobotoBlack';
  margin-bottom: 55px;
`
const FieldContainer = styled.View`
  width: 290px;
  margin-bottom: 15px;
`
const FieldLabel = styled.Text`
  font-size: 14px;
  font-family: 'RobotoRegular';
  margin-bottom: 7px;
`
const FieldInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #3A3A3A;
`
const CenteredText = styled.Text`
  color: #3A3A3A;
  font-weight: bold;

  font-family: 'RobotoBlack';
  font-size: 18px;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 15px;
`

export function Login() {
  function handleSubmint() {
    console.log('submit')
  }
  return (
    <Background>
      <LoginTitle>Entrar</LoginTitle>

      <FieldContainer>
        <FieldLabel>E-mail</FieldLabel>
        <FieldInput />
      </FieldContainer>

      <FieldContainer>
        <FieldLabel>Senha</FieldLabel>
        <FieldInput />
      </FieldContainer>
      <DefaultButton 
        label='continuar' 
        onPress={handleSubmint} />
      <CenteredText>
        Ainda não tem conta? Cadastrar
      </CenteredText>
      <CenteredText>
        Ou continue com
      </CenteredText>
      <DefaultButton 
        onPress={() => {}} 
        label='Continue com Facebook' />
      <DefaultButton 
        onPress={() => {}} 
        label='Continue com Facebook' />
      <DefaultButton 
        onPress={() => {}} 
        label='Continue com Facebook' />
        
    </Background>
  )
}