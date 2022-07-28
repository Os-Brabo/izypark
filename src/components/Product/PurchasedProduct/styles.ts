import styled from "styled-components/native";

export const ItemContainer = styled.View`
  padding: 10px;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
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
