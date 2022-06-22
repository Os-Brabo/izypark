import styled from "styled-components/native";
export const InstitutionsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const FavoriteInstitutionContainer = styled.TouchableOpacity`
  background-color: #3a3a3a;
  padding: 20px 12px;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  /* max-width: 80%; */
  margin: 0 auto;
`;

export const FavoriteInstitutionTitle = styled.Text`
  color: white;
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
  max-height: 30px;
  flex: 1;
  text-align: left;
  font-family: "RobotoBlack";
`;
