import React from "react"
import Yup from "yup"
import { Formik } from "formik"
import { DefaultButton } from "../../../components/Buttons/DefaultButton"
import { FacebookButton } from "../../../components/Buttons/FacebookButton"
import { GithubButton } from "../../../components/Buttons/GithubButton"
import { GoogleButton } from "../../../components/Buttons/GoogleButton"
import * as S from '../styles'

const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Email Inválido').required(),
  password: Yup.string()
    .min(6, 'Min 6 characters')
    .max(20, 'Max 20 characters')
    .required(),
  passwordConfirmation: Yup.string()
    .min(6, 'Min 6 characters')
    .max(20, 'Max 20 characters')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
})
export function SignUp() {
  const initalValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }
  function handleSubmit() {

  }
  return (
    <S.Background>
      <S.LoginTitle>Cadastrar</S.LoginTitle>
      <Formik initialValues={initalValues} onSubmit={handleSubmit}>
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

      </Formik>
      
      <S.CenteredText>
        Ou continue com
      </S.CenteredText>
      <FacebookButton />
      <GoogleButton />
      <GithubButton />
      
        
    </S.Background> 
  )
}