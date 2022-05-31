import { Link } from "@react-navigation/native";
import React from "react";
import * as Yup from "yup";
import { DefaultButton } from "../../../components/Buttons/DefaultButton";
import { FacebookButton } from "../../../components/Buttons/FacebookButton";
import { GithubButton } from "../../../components/Buttons/GithubButton";
import { GoogleButton } from "../../../components/Buttons/GoogleButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
import { Spacer } from "../../../components/shared/Spacer";
import { useAuth } from "../../../hooks/useAuth";

import * as S from "../styles";

const signInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

export function Login() {
  const { signInWithPassword } = useAuth();
  function handleSubmint() {
    console.log("submit");
  }
  return (
    <S.Background>
      <Spacer height={25} />
      <BlackTitle>Entrar</BlackTitle>
      <Spacer height={25} />
      <S.FieldContainer>
        <S.FieldLabel>E-mail</S.FieldLabel>
        <S.FieldInput />
      </S.FieldContainer>

      <S.FieldContainer>
        <S.FieldLabel>Senha</S.FieldLabel>
        <S.FieldInput />
      </S.FieldContainer>
      <DefaultButton label="continuar" onPress={handleSubmint} />
      <S.CenteredText>
        Ainda não tem conta?
        <Link to={{ screen: "SignUp" }}>Cadastrar</Link>
      </S.CenteredText>
      <S.CenteredText>Ou continue com</S.CenteredText>
      <FacebookButton />
      <GoogleButton />
      <GithubButton />
    </S.Background>
  );
}
