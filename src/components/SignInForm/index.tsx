import { Formik } from "formik";
import { View } from "react-native";
import { useToaster } from "../../hooks/Toaster";
import { useAuth } from "../../hooks/useAuth";
import { DefaultButton } from "../Buttons/DefaultButton";
import { FieldContainer, FieldInput, FieldLabel } from "../shared/Form/styles";

interface Credentials {
  email: string;
  password: string;
}
export function SignInForm() {
  const { signInWithPassword } = useAuth();
  const toast = useToaster();
  const initialValues: Credentials = {
    email: "",
    password: ""
  };
  async function submit({ email, password }: Credentials) {
    const response = await signInWithPassword({ email, password });
    if (response.isLeft()) {
      console.log(response.value);
      return;
    }
    toast.showToaster("Cadastro realizado com sucesso!", 400);
  }
  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {({ handleSubmit, handleBlur, handleChange, values, errors }) => (
        <View>
          <FieldContainer>
            <FieldLabel>E-mail</FieldLabel>
            <FieldInput
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
            />
          </FieldContainer>
          <FieldContainer>
            <FieldLabel>Senha</FieldLabel>
            <FieldInput
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="Digite sua senha"
              secureTextEntry
            />
          </FieldContainer>
          <DefaultButton label="Entrar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
