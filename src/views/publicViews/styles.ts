import styled from "styled-components/native"
interface InputProps {
  hasError?: boolean;
}

export const Background = styled.View`
  background-color: #fff;
  flex:1;
  align-items: center;
  padding: 15px;
`
export const LoginTitle = styled.Text`
  margin-top: 25px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  font-family: 'RobotoBlack';
  margin-bottom: 25px;
`
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
export const CenteredText = styled.Text`
  color: #3A3A3A;
  font-weight: bold;

  font-family: 'RobotoBlack';
  font-size: 18px;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 15px;
`