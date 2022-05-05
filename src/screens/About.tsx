import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Feather from '@expo/vector-icons/Feather'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
const TopContainer = styled.View`
  background-color: #3A3A3A;
  height: 50%;
  width: 100%;
  padding-top: ${getStatusBarHeight() + 22}px;
`
export function About() {
  return(
    <TopContainer>
      <Feather name="menu" size={32} color="white" />
      <Text>About</Text>
    </TopContainer>
    
  )
}