import styled from "styled-components/native";

interface VacanciesProps {
  vacancies: number;
  availableNow: number;
}

const handleColorType = (availabe: number, vacancies: number) => {
  if (availabe <= 5) {
    return "#f44336";
  }
  if (availabe <= 15) {
    return "#ffc107";
  }
  return "#5BC873";
};

export const Container = styled.TouchableOpacity`
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
  flex-basis: 30%;
  background-color: ${(props) =>
    handleColorType(props.availableNow, props.vacancies)};
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
