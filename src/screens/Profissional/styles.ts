import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Center } from 'native-base';


export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  flex: 1;
`;

export const btnBody = styled.View`
  position:absolute;
  bottom: 0;
  right: 0;
`;

export const Items = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin: 10%;
  text-align:center;
`;

export const btnAdd = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 55px;
  height: 55px;
  border-radius: 150px;
  align-items: center;
  justify-content: center;
  margin: 40px;
`;

export const Hobbies = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100px;
  height: 100px;
  border-radius: 80px;
  position: absolute;
  top: 300px;
  left: 50px;
  align-items: center;
  justify-content: center;
`;

export const Felicidade = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 180px;
  height: 180px;
  border-radius: 90px;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 300px;
  right: 50px;
  align-items: center;
  justify-content: center;
`;

export const Espiritualidade = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 110px;
  height: 110px;
  border-radius: 80px;
  position: absolute;
  top: 50px;
  right: 50px;
  align-items: center;
  justify-content: center;
`;