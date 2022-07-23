import { Picker } from "@react-native-picker/picker";
import styled from "styled-components/native";

interface InputProps {
  hasError?: boolean;
}

export const FieldContainer = styled.View`
  width: 290px;
  margin-bottom: 10px;
`;
export const FieldLabel = styled.Text`
  font-size: 14px;
  font-family: "RobotoRegular";
  margin-bottom: 7px;
`;
export const FieldInput = styled.TextInput<InputProps>`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #3a3a3a;
  padding: 10px 12px;
  border-color: ${(props) => (props.hasError ? "red" : "#3a3a3a")};
`;

export const FieldSelect = styled(Picker)`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #3a3a3a;
  padding: 10px 12px;
`;

export const FormContainer = styled.View`
  margin-top: 30px;
  flex: 1;
  align-items: center;
`;
