import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Center } from 'native-base';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: baseline;
  align-items: center;
`;

export const btnBody = styled.View`
position:absolute;
width: 100%;
bottom: 0;
`;

export const Objetivo = styled.View`
background-color: ${({ theme }) => theme.COLORS.WHITE};
position: relative;
width: 90%;
height: auto;
align-items: center;
justify-content: center;
border-radius: 20px;
padding: 10px;
margin-top: 80px;

`;


export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin: 10%;

`;

export const btnAdd = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100%;
  height: 65px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`

  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 15px;
  width: 100%;
  height: 50px;
 border: 1px solid #fff;
 border-bottom-color: #000;
 margin-bottom: 5px;
`;