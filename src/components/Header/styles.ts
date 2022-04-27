import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  height: 120px;
  padding: 15px;
  padding-top: ${getStatusBarHeight() + 22}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #3A3A3A;
`