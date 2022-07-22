import styled from "styled-components/native";
export const InstitutionsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const FavoriteInstitutionContainer = styled.TouchableOpacity`
  background-color: #3a3a3a;
  padding: 0px 12px;
  flex-direction: row;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 0 auto;
`;

export const FavoriteInstitutionTitle = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
  flex: 1;
  text-align: left;
  font-family: "RobotoBlack";
`;
