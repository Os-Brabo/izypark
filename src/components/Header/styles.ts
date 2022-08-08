import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: 15px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const MenuButton = styled.TouchableOpacity`
  margin-left: auto;
`;
