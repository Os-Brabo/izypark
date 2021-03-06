import styled from "styled-components/native"

interface InputProps {
  hasError?: boolean;
}

export const FieldContainer = styled.View`
  width: 290px;
  margin-bottom: 10px;
`
export const FieldLabel = styled.Text`
  font-size: 14px;
  font-family: 'RobotoRegular';
  margin-bottom: 7px;
`
export const FieldInput = styled.TextInput<InputProps>`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #3A3A3A;
  padding: 10px 12px;
  border-color: ${(props) => (props.hasError ? 'red' : '#3a3a3a')};
`