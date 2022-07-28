import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { PurchasedProduct } from "../../components/Product/PurchasedProduct";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { useAuth } from "../../hooks/useAuth";

export function Purchases() {
  const { userData } = useAuth();

  return (
    <>
      <Header returnTo="back" />
      <BlackTitle>Minhas Compras</BlackTitle>
      <FlatList
        style={{ padding: 15, marginTop: 30 }}
        data={userData.boughtProducts}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69 }}
        ItemSeparatorComponent={() => <Spacer height={15} />}
        renderItem={({ item }) => (
          <PurchasedProduct data={item} key={item.id} />
        )}
      />
    </>
  );
}
