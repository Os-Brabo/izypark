import React from "react";
import { Text } from "react-native";
import { ProductInfo } from "../ProductInfo";
import { CopyButton } from "../../shared/CopyButton";
import { Spacer } from "../../shared/Spacer";
import * as S from "./styles";
import { UserBoughtProduct } from "../../../contexts/AuthContext";
import { format } from "date-fns";

interface Props {
  data: UserBoughtProduct;
}
export function PurchasedProduct({ data }: Props) {
  return (
    <S.ItemContainer>
      <ProductInfo data={{ ...data, imageUrl: data.image, cost: data.price }} />
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
          {format(data.boughtAt, "dd/MM/yyyy HH:mm")}
        </S.TextWithStrong>
      </S.Row>
      <Spacer height={12} />
      <S.Row>
        <S.TextWithStrong
          textColor={
            data.status === "waiting_withdrawal" ? "#FFA36F" : "#5BC873"
          }
        >
          <Text style={{ fontWeight: "bold" }}>Status: </Text>
          {data.status === "waiting_withdrawal"
            ? "Aguardando Retirada"
            : "Concluído"}
        </S.TextWithStrong>
      </S.Row>
    </S.ItemContainer>
  );
}
