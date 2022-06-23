import React from "react";
import * as S from "./styles";

interface Block {
  id: string;
  name: string;
  vacancies: number;
  availableNow: number;
}
interface Props {
  handlePark(block: Block): void;
  block: Block;
}
export function Block({ block, handlePark }: Props) {
  const totalVacancies = `/ ${block.vacancies}`;

  function handlePress() {
    console.log("handlePark");
    handlePark(block);
  }

  return (
    <S.Container onPress={handlePress}>
      <S.Title>{block.name}</S.Title>
      <S.Vacancies
        vacancies={block.vacancies}
        availableNow={block.availableNow}
      >
        <S.VacanciesAmount>{block.availableNow}</S.VacanciesAmount>
        <S.VacanciestTotal>{totalVacancies}</S.VacanciestTotal>
      </S.Vacancies>
    </S.Container>
  );
}
