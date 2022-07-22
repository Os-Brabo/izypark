import React from "react";
import { ProductProps } from "../types";
import * as S from "./styles";

interface Props {
  data: ProductProps;
}
export function ProductInfo({ data }: Props) {
  return (
    <S.Container>
      <S.Body>
        <S.Image source={{ uri: data.imageUrl }} />
        <S.BodyContent>
          <S.Title>{data.title}</S.Title>
          <S.Description>{data.description}</S.Description>
        </S.BodyContent>
      </S.Body>
      <S.Cost>{data.cost} Pontos</S.Cost>
    </S.Container>
  );
}
