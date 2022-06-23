import { FacebookAuthProvider } from "firebase/auth";
import React, { useEffect } from "react";
import { useToaster } from "../../../hooks/Toaster";
import { useAuth } from "../../../hooks/useAuth";
import * as S from "./styles";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export function FacebookButton() {
  const auth = useAuth();
  const { showToaster } = useToaster();

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: "741562397011760"
  });

  async function handlePress() {
    promptAsync();
  }

  async function onResponse() {
    if (response?.type !== "success") {
      return;
    }
    const { access_token } = response.params;
    const credential = FacebookAuthProvider.credential(access_token);

    const resp = await auth.credentialSignIn(credential);
    if (resp.isLeft()) {
      console.log(resp.value);
      showToaster("Falha na autenticação");
    }
  }

  useEffect(() => {
    onResponse();
  }, [response]);

  return (
    // @TODO - update touchableOpacity to RectButton
    <S.Container onPress={handlePress}>
      <S.Icon name="facebook-f" />
      <S.Text>Continuar com Facebook</S.Text>
    </S.Container>
  );
}
