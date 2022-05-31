import { Link } from "@react-navigation/native";
import React from "react";
import { FacebookButton } from "../../../components/Buttons/FacebookButton";
import { GithubButton } from "../../../components/Buttons/GithubButton";
import { GoogleButton } from "../../../components/Buttons/GoogleButton";
import { BlackTitle } from "../../../components/shared/BlackTitle";
import { Spacer } from "../../../components/shared/Spacer";
import { SignInForm } from "../../../components/SignInForm";

import * as S from "../styles";

export function Login() {
  return (
    <S.Background>
      <Spacer height={25} />
      <BlackTitle>Entrar</BlackTitle>
      <Spacer height={25} />
      <SignInForm />
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
