import React from 'react'
import { Formik } from "formik";
import { Text, View } from "react-native";
import { DefaultButton } from "../Buttons/DefaultButton";
import * as S from './styles'
import * as Yup from "yup"
import { useToaster } from '../../hooks/Toaster';
import { Either } from '../../utils/Either';
const signUpSchema = Yup.object().shape({
  email: Yup.string().required(),
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
interface Credentials {
  email: string,
  password: string,
}
interface Props {
  onSubmit: (values: Credentials) => Promise<Either<Error, null>>
}
export function SignUpForm({ onSubmit }: Props) {
  const toast = useToaster()
  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
  }
  async function handleSuccessSubmit(values: Credentials) {
    console.log('enviei')
    const response = await onSubmit(values)
    if (response.isLeft()) {
      console.log(response.value)
      return;
    }
    toast.showToaster('Cadastro realizado com sucesso!', 400);
    // redirectx/

    
  }
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSuccessSubmit}
      validationSchema={signUpSchema}
      >
      {({handleSubmit, handleChange, handleBlur, values, errors}) => (
        <View>
          <S.FieldContainer>
            <S.FieldLabel>E-mail</S.FieldLabel>
            <S.FieldInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
            />
            <Text>{errors.email}</Text>
          </S.FieldContainer>
                <S.FieldContainer>
                  <S.FieldLabel>Senha</S.FieldLabel>
                  <S.FieldInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    placeholder="Digite sua senha"
                    secureTextEntry
                  />
                  <Text>{errors.password}</Text>
                </S.FieldContainer>
                <S.FieldContainer>
                  <S.FieldLabel>Confirmar Senha</S.FieldLabel>
                  <S.FieldInput
                    value={values.passwordConfirmation}
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    placeholder="Repetir senha"
                    secureTextEntry
                  />
                  <Text>{errors.passwordConfirmation}</Text>
                </S.FieldContainer>
          <DefaultButton
            label="continuar"
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  )

}