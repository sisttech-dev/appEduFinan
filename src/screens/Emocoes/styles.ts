import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Center } from 'native-base';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const btnBody = styled.View`
  position:relative;
`;

export const Emocao = styled.View`

    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:60%
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;


export const Img = styled.Image`
  width: 220px;
  height: 220px;
  margin-top: 70%;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  text-align: center;
  position: absolute;
  top: 25%;
  width: 90%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  margin: 10px;
`;

export const btnAdd = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100px;
  height: 35px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: relative;
`;