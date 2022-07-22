import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header";
import { ShelfProduct } from "../../components/Product/ShelfProduct";
import { BlackTitle } from "../../components/shared/BlackTitle";
import { Spacer } from "../../components/shared/Spacer";
import { useInstitution } from "../../hooks/useInstitution";
import { ProductProps } from "../../components/Product/types";
import * as S from "./styles";
import { useAuth } from "../../hooks/useAuth";

export function Store() {
  const { currentInstitution } = useInstitution();
  const { userData } = useAuth();
  const [products, setProducts] = React.useState<ProductProps[]>([]);

  useEffect(() => {
    if (!currentInstitution) return;
    const parsedProducts = currentInstitution.products.map<ProductProps>(
      (product) => ({
        id: product.id,
        cost: product.price,
        description: product.description,
        imageUrl: product.image,
        title: product.title
      })
    );
    setProducts(parsedProducts);
  }, [currentInstitution]);
  return (
    <>
      <Header returnTo="back" />
      <BlackTitle>{currentInstitution?.initials} - Loja</BlackTitle>
      <FlatList
        style={{ padding: 15, marginTop: 30 }}
        data={products}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69 }}
        ItemSeparatorComponent={() => <Spacer height={15} />}
        renderItem={({ item }) => <ShelfProduct data={item} key={item.id} />}
      />
      <S.CoinsContainer>
        <S.CoinsText>{userData?.coins} moedas disponíveis</S.CoinsText>
      </S.CoinsContainer>
    </>
  );
}
