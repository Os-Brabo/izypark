import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { Item, ItemPurchased } from "../../components/Products/Item";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";

export function Store() {
  const items: ItemPurchased[] = [
    {
      title: "Coca-Cola",
      description: "Coca-Cola Zero Lata lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
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
    
  ]
  return (
    <>
      <Header />
      <BlackTitle>Minhas Compras</BlackTitle>
      <FlatList
        style={{ padding: 15, marginTop: 30 }}
        data={items}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69 }}
        ItemSeparatorComponent={() => <Spacer height={15} />}
        renderItem={({ item }) => (
          <Item data={item} key={item.id} />
        )}
      />
    </>
  )
}