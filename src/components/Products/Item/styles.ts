import styled from "styled-components/native";

export const ItemContainer = styled.View`
  padding: 10px;
  border: 1px solid black;
`;
export const ItemBody = styled.View`
  flex-direction: row;
`;
export const ItemBodyContent = styled.View`
  max-width: 100%;
  flex: 1;
`;
export const ItemImage = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: 15px;
`;
export const ItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: "RobotoBlack";
`;
export const ItemDescription = styled.Text`
  font-size: 14px;
`;

export const ItemFooter = styled.View`
  padding: 10px;
`;
export const ItemCost = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-family: "RobotoBlack";
  text-align: right;
`;
export const TextWithStrong = styled.Text<{ textColor?: string }>`
  font-size: 13px;
  color: ${(props) => props.textColor || "#000"};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
