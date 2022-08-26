import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { VehicleData } from ".";
import { BlackTitle } from "../../components/shared/BlackTitle";

export const Title = styled(BlackTitle)`
  margin-top: 30px;
`;

export const vehiclesList = styled(
  FlatList as new (props: FlatListProps<VehicleData>) => FlatList<VehicleData>
)`
  padding: 15px;
  height: 100%;
  max-height: 60%;
`;
