import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TopContainer = styled.View`
  background-color: #3a3a3a;
  padding: 15px 0;
`;
export const DefaultTitle = styled.Text`
  font-size: 50px;
  color: #fff;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
export const CO2Container = styled.View`
  /* width: 100%; */
  background-color: green;
`;
export const CO2Description = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
  max-width: 50%;
  margin: 0 auto 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const AvailableCoins = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
export const BottomContainer = styled.View`
  background-color: #fff;
  padding: 25px;
  flex: 1;
`;
