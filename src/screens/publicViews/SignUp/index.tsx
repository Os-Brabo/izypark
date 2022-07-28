import React from "react";
import * as Yup from "yup";
import { FacebookButton } from "../../../components/Buttons/FacebookButton";
import { GithubButton } from "../../../components/Buttons/GithubButton";
import { GoogleButton } from "../../../components/Buttons/GoogleButton";
import * as S from "../styles";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useAuth } from "../../../hooks/useAuth";
import { SignUpForm } from "../../../components/SignUpForm";
import { Either } from "../../../utils/Either";
import { BlackTitle } from "../../../components/shared/BlackTitle";

export function SignUp() {
  const { signUpWithPassword } = useAuth();
  async function onSubmit({
    email,
    password,
    name
  }: {
    email: string;
    password: string;
    name: string;
  }): Promise<Either<Error, null>> {
    console.log("submiting");
    return await signUpWithPassword({ email, password, name });
  }
  return (
    <S.Background>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <BlackTitle>Cadastrar</BlackTitle>
          <SignUpForm onSubmit={onSubmit} />

          <S.CenteredText>Ou continue com</S.CenteredText>
          <FacebookButton />
          <GoogleButton />
          <GithubButton />
        </ScrollView>
      </KeyboardAvoidingView>
    </S.Background>
  );
}
