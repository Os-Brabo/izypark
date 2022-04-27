import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,

  elevation: 1,
})`
  height: 50px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding-left: 25px;
  border: 1px solid #3A3A3A;

  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Image = styled.Image`
  margin-right: 21px;
  width: 22px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #3283fc;
  line-height: 17px;
`;
