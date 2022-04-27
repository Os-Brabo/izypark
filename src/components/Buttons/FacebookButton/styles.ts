import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  height: 50px;
  width: 100%;
  background-color: #2c71d9;
  border-radius: 5px;
  padding-left: 30px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Icon = styled(FontAwesome)`
  margin-right: 25px;
  color: #fff;
  font-size: 23px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  line-height: 17px;
`;
