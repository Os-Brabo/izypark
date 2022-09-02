import styled from "styled-components/native";

interface ContainerProps {
  isCurrent: boolean;
}

export const ItemContainer = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  border-color: ${({ isCurrent }) => (isCurrent ? "#ff9000" : "#eee")};
  border-style: solid;
  border-bottom-width: 2px;
  padding: 10px;

  ${({ isCurrent }) => isCurrent && `background-color: #d3d3d3;`}
`;
export const ItemText = styled.Text`
  font-size: 20px;
`;
