import styled from "styled-components/native";

interface VacanciesProps {
  vacancies: number;
  availableNow: number;
}

const handleColorType = (amount: number) => {
  if (amount <= 5) return "#5BC873";
  if (amount <= 15) return "#ffc107";
  return "#f44336";
};

export const Container = styled.View`
  background-color: #3a3a3a;
  border-radius: 8px;
  /* padding: 15px 0; */
  flex-direction: row;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-family: "RobotoBlack";
  font-size: 26px;
  margin-left: 26px;
`;

export const Vacancies = styled.View<VacanciesProps>`
  height: 100%;
  /* border-top-right-radius: 5px;
  border-bottom-right-radius: 5px; */
  flex-basis: 30%;
  /* background-color: #ff323a; */
  /* background-color: : ${({ vacancies }) => handleColorType(vacancies)}; */
  background-color: ${(props) => handleColorType(props.availableNow)};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const VacanciesAmount = styled.Text`
  color: #fff;
  font-weight: bold;
  font-family: "RobotoBlack";
  font-size: 26px;
`;
export const VacanciestTotal = styled.Text`
  margin-top: 9px;
  font-weight: bold;
  font-family: "RobotoBlack";
  font-size: 14px;
  color: #fff;
`;
