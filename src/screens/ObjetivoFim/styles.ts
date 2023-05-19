import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Center } from 'native-base';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
`;

export const btnBody = styled.View`
position:relative;
align-items: center;
justify-content: center;
width: 30%;
height: 30%;
margin:5px;
`;

export const Emocao = styled.ScrollView`
background-color: ${({ theme }) => theme.COLORS.WHITE};
width: 100%;
height: 5%;
display: flex;
position: relative;
border-top-right-radius: 100px;
border-top-left-radius: 100px;
padding-top:15px;

`;

export const Botoes = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 50%;
width: 90%;
margin-left: 4%;

`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  display: flex;
  position: relative;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  flex-direction:row;
`;


export const Img = styled.Image`
  position: relative;
  width: 30%;
  height: 175px;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  text-align: center;
  position: relative;
  width: 50%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  margin: 10px;
`;
export const TextEmocoes = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  margin: 10px;
  width: 80%;
  padding-left: 15%;
`;

export const btnAdd = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100%;
  height: 35px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: relative;
`;

export const btnProx = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  height: 35px;
  border-radius: 2px;
  position: absolute;
  bottom: 0%;

`;