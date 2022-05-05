import React from "react";
import { Text } from "react-native";
import * as S from "./styles";
import { Spacer } from "../../shared/Spacer";
import { CopyButton } from "../../shared/CopyButton";
export type ItemPurchased = {
  imageUrl: string;
  cost: number;
  id: string;
  title: string;
  description: string;
  status: "awaiting_purchase" | "delivered";
}

interface Props {
  data: ItemPurchased;
}
export function Item({data}: Props) {
  return (
    <S.ItemContainer>
      <S.ItemBody>
        <S.ItemImage source={{ uri: data.imageUrl }} />
        <S.ItemBodyContent>
          <S.ItemTitle>{ data.title }</S.ItemTitle>
          <S.ItemDescription>{ data.description }</S.ItemDescription>
        </S.ItemBodyContent>
      </S.ItemBody>
      <S.ItemFooter>
        <S.ItemCost>{data.cost} Pontos</S.ItemCost>
        <Spacer height={26} />
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
          <S.TextWithStrong textColor={data.status === "awaiting_purchase" ? "#FFA36F" : "#5BC873"}>
            <Text style={{ fontWeight: "bold" }}>Status: </Text>
            {data.status === "awaiting_purchase" ? "Aguardando Retirada" : "Entregue"}
          </S.TextWithStrong>
        </S.Row>
      </S.ItemFooter>
    </S.ItemContainer>
  )
}