import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ActivityIndicator } from "react-native";
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
  const [isLoading, setIsLoading] = React.useState(false);
  const { userData } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const institution = useInstitution();
  const toast = useToaster();

  const coins = userData?.coins ?? 0;
  const userCanBuy = coins >= data.cost;

  async function handleBuyPress() {
    setIsLoading(true);
    if (!userCanBuy) {
      toast.showToaster("Você não possui moedas suficientes", 400);
      setIsLoading(false);
      return;
    }
    await institution.handleProductPurchase(data.id);
    toast.showToaster("Produto comprado! Retire na instituição");
    navigation.navigate("Compras");
    setIsLoading(false);
  }

  return (
    <S.Container>
      <ProductInfo data={data} />
      <S.BuyButton
        isDisabled={!userCanBuy || isLoading}
        onPress={handleBuyPress}
      >
        {!isLoading ? (
          <S.ButtonText>comprar</S.ButtonText>
        ) : (
          <ActivityIndicator color="#fff" />
        )}
      </S.BuyButton>
    </S.Container>
  );
}
