import React from "react";
import { useToaster } from "../../../hooks/Toaster";
import { useAuth } from "../../../hooks/useAuth";
import { ProductInfo } from "../ProductInfo";
import { ProductProps } from "../types";
import * as S from "./styles";

interface Props {
  data: ProductProps;
}
export function ShelfProduct({ data }: Props) {
  const { userData } = useAuth();
  const toast = useToaster();

  const coins = userData?.coins ?? 0;
  const userCouldBuy = coins >= data.cost;

  function handleBuyPress() {
    if (!userCouldBuy) {
      toast.showToaster("Você não possui moedas suficientes", 400);
      return;
    }
    console.log("buy pressed");
  }

  return (
    <S.Container>
      <ProductInfo data={data} />
      <S.BuyButton isDisabled={!userCouldBuy} onPress={handleBuyPress}>
        <S.ButtonText>comprar</S.ButtonText>
      </S.BuyButton>
    </S.Container>
  );
}
