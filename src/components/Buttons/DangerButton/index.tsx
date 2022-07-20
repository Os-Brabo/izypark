import React from "react";
import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #ff0000;
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

interface Props {
  label: string;
  onPress: () => void;
}

export function DangerButton({ label, onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
}
