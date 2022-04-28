import React from "react"
import * as Yup from "yup"
import { FacebookButton } from "../../../components/Buttons/FacebookButton"
import { GithubButton } from "../../../components/Buttons/GithubButton"
import { GoogleButton } from "../../../components/Buttons/GoogleButton"
import * as S from '../styles'
import { KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useAuth } from "../../../hooks/useAuth"
import { SignUpForm } from "../../../components/SignUpForm"

export function SignUp() {
  const {signUpWithPassword} = useAuth()
  async function onSubmit({ email, password }: { email: string, password: string }) {
    console.log('submiting');
    const response = await signUpWithPassword({ email, password })
    console.log(response)
  }
  return (
    <S.Background>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <S.LoginTitle>Cadastrar</S.LoginTitle>
          <SignUpForm onSubmit={onSubmit} />
          
          <S.CenteredText>
            Ou continue com
          </S.CenteredText>
          <FacebookButton />
          <GoogleButton />
          <GithubButton />

        </ScrollView>
      </KeyboardAvoidingView>
      
        
    </S.Background> 
  )
}