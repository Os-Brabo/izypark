import React from "react";
import * as S from "./styles";

interface Props {
  data: {
    id: string;
    carPlate: string;
    carModel: string;
    carColor: string;
  }
}

export function Vehicle({data}: Props) {
  return (
    <S.VehicleContainer>
      <S.VehicleTitle>{ data.carPlate }</S.VehicleTitle>
      <S.VehicleText>{data.carModel} - {data.carColor}</S.VehicleText>
    </S.VehicleContainer>
  );
}