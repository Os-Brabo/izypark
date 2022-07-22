import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useToaster } from "../../../hooks/Toaster";
import { useAuth } from "../../../hooks/useAuth";
import { useInstitution } from "../../../hooks/useInstitution";
import { ProductInfo } from "../ProductInfo";
import { ProductProps } from "../types";
import * as S from "./styles";

interface Props {
  data: ProductProps;
}
export function ShelfProduct({ data }: Props) {
  const { userData } = useAuth();
  const navigation = useNavigation();
  const institution = useInstitution();
  const toast = useToaster();

  const coins = userData?.coins ?? 0;
  const userCanBuy = coins >= data.cost;

  async function handleBuyPress() {
    if (!userCanBuy) {
      toast.showToaster("Você não possui moedas suficientes", 400);
      return;
    }
    await institution.handleProductPurchase(data.id);
    toast.showToaster("Produto comprado! Retire na instituição");
    navigation.navigate("Purchases");
  }

  return (
    <S.Container>
      <ProductInfo data={data} />
      <S.BuyButton isDisabled={!userCanBuy} onPress={handleBuyPress}>
        <S.ButtonText>comprar</S.ButtonText>
      </S.BuyButton>
    </S.Container>
  );
}
