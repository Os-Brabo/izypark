import React from "react";
import { Text } from "react-native";
import { ProductInfo } from "../ProductInfo";
import { CopyButton } from "../../shared/CopyButton";
import { Spacer } from "../../shared/Spacer";
import * as S from "./styles";
import { ProductProps } from "../types";

export type PorchasedProductProps = ProductProps & {
  status: "awaiting_purchase" | "delivered";
};

interface Props {
  data: PorchasedProductProps;
}
export function PurchasedProduct({ data }: Props) {
  return (
    <S.ItemContainer>
      <ProductInfo data={data} />
      <S.Row>
        <S.TextWithStrong>
          <Text style={{ fontWeight: "bold" }}>ID:</Text>
          {data.id}
        </S.TextWithStrong>
        <CopyButton />
      </S.Row>
      <Spacer height={12} />
      <S.Row>
        <S.TextWithStrong>
          <Text style={{ fontWeight: "bold" }}>Adquirido em: </Text>
          03/04/2022 16:30:00
        </S.TextWithStrong>
      </S.Row>
      <Spacer height={12} />
      <S.Row>
        <S.TextWithStrong
          textColor={
            data.status === "awaiting_purchase" ? "#FFA36F" : "#5BC873"
          }
        >
          <Text style={{ fontWeight: "bold" }}>Status: </Text>
          {data.status === "awaiting_purchase"
            ? "Aguardando Retirada"
            : "Entregue"}
        </S.TextWithStrong>
      </S.Row>
    </S.ItemContainer>
  );
}
