import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #3a3a3a;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  min-width: 290px;
  align-self: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  font-family: "RobotoBlack";
`;

interface Props extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
}

export function DefaultButton({ label, onPress, ...props }: Props) {
  return (
    <ButtonContainer onPress={onPress} {...props}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
}
