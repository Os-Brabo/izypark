import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { PorchasedProductProps } from "../../components/Product/PurchasedProduct";
import { ShelfProduct } from "../../components/Product/ShelfProduct";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import * as S from "./styles";

export function Store() {
  const items: PorchasedProductProps[] = [
    {
      title: "Coca-Cola",
      description:
        "Coca-Cola Zero Lata lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      imageUrl: "https://picsum.photos/120/120",
      cost: 100,
      id: "123",
      status: "delivered"
    },
    {
      title: "Guaraná",
      description: "Guaraná Antartica",
      imageUrl: "https://picsum.photos/120/120",
      cost: 250,
      id: "1234",
      status: "awaiting_purchase"
    },
    {
      title: "Kuat",
      description: "Kuat",
      imageUrl: "https://picsum.photos/120/120",
      cost: 25,
      id: "12345",
      status: "awaiting_purchase"
    }
  ];
  return (
    <>
      <Header returnTo="back" />
      <BlackTitle>FACENS - Loja</BlackTitle>
      <FlatList
        style={{ padding: 15, marginTop: 30 }}
        data={items}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69 }}
        ItemSeparatorComponent={() => <Spacer height={15} />}
        renderItem={({ item }) => <ShelfProduct data={item} key={item.id} />}
      />
      <S.CoinsContainer>
        <S.CoinsText>35 moedas disponíveis</S.CoinsText>
      </S.CoinsContainer>
    </>
  );
}
