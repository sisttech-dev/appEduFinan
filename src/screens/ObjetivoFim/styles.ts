import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Center } from 'native-base';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
`;

export const Header = styled.View`
background-color: ${({ theme }) => theme.COLORS.RED};
width: 100%;
height: 45%;
display: flex;
position: relative;
justify-content: space-around;
align-items:center;
flex-direction:row;
`;

export const Infos = styled.View`
background-color: ${({ theme }) => theme.COLORS.RED};
position: relative;
justify-content: center;
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

export const Emocao = styled.View`
background-color: ${({ theme }) => theme.COLORS.WHITE};
width: 100%;
height: 60%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
position: absolute;
border-top-right-radius: 80px;
border-top-left-radius: 80px;
padding-top:30px;
top:47%

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

export const Img = styled.Image`
  position: relative;
  width: 40%;
  height: 230px;
  margin-top: 18%;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  text-align: left;
  position: relative;
  width: 100%;
  margin: 10px;
`;

export const TextRecompensa = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  text-align: left;
  position: relative;
  width: 100%;
  margin: 10px;
  
`;

export const TituloHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: left;
  position: relative;
  width: 100%;
  margin: 5px;
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
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  justify-content: center;
  margin: 10px;
  width: 95%;
  
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
  height: 40px;
  position: absolute;
  bottom: 0%;
`;