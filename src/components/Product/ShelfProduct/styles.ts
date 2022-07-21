import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
`;

export const BuyButton = styled.TouchableOpacity<{ isDisabled: boolean }>`
  background-color: ${(props) => (props.isDisabled ? "#A3A3A3" : "#5bc873")};
  border-radius: 8px;
  height: 44px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
