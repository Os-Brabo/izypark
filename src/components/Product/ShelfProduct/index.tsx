import React from "react";
import { ProductInfo } from "../ProductInfo";
import { ProductProps } from "../types";
import * as S from "./styles";

interface Props {
  data: ProductProps;
}
export function ShelfProduct({ data }: Props) {
  return (
    <S.Container>
      <ProductInfo data={data} />
      <S.BuyButton>
        <S.ButtonText>comprar</S.ButtonText>
      </S.BuyButton>
    </S.Container>
  );
}
