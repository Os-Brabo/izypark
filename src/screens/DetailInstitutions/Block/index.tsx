import React from "react";
import * as S from "./styles";
interface Props {
  block: {
    id: string;
    name: string;
    vacancies: number;
    availableNow: number;
  };
}
export function Block({ block }: Props) {
  const totalVacancies = `/ ${block.vacancies}`;
  return (
    <S.Container>
      <S.Title>{block.name}</S.Title>
      <S.Vacancies>
        <S.VacanciesAmount>{block.availableNow}</S.VacanciesAmount>
        <S.VacanciestTotal>{totalVacancies}</S.VacanciestTotal>
      </S.Vacancies>
    </S.Container>
  );
}
