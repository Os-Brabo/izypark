import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

const TopContainer = styled.View`
  background-color: #3A3A3A;
  height: 50%;
  width: 100%;
`
const DefaultTitle = styled.Text`
  font-size: 50px;
  color: #fff;
  font-weight: bold;
  font-family: 'RobotoBlack';
  text-align: center;
`
const CO2Container = styled.View`
  width: 100%;
`
const CO2Description = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
  max-width: 50%;
  margin: 0 auto 20px;
  font-family: 'RobotoMedium';

`
const AvailableCoins = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'RobotoMedium';
  text-align: center;
`
const BottomContainer = styled.View`
  background-color: #fff;
  padding: 25px;
  height: 100%;

`

export const styles = {
  TopContainer,
  DefaultTitle,
  CO2Container,
  CO2Description,
  AvailableCoins,
  BottomContainer
}