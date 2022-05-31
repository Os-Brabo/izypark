import { Formik } from "formik";
import { View } from "react-native";
import { DefaultButton } from "../Buttons/DefaultButton";
import { FieldContainer, FieldInput, FieldLabel } from "../shared/Form/styles";

interface Credentials {
  email: string;
  password: string;
}
export function SignInForm() {
  const initialValues: Credentials = {
    email: "",
    password: ""
  };
  function submit(data: Credentials) {
    console.log(data);
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
