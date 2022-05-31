import React from "react";
import * as S from "./styles";

interface Props {
  data: {
    id: string;
    plate: string;
    model: string;
    color: string;
  };
}

export function Vehicle({ data }: Props) {
  return (
    <S.VehicleContainer>
      <S.VehicleTitle>{data.plate}</S.VehicleTitle>
      <S.VehicleText>
        {data.model} - {data.color}
      </S.VehicleText>
    </S.VehicleContainer>
  );
}
