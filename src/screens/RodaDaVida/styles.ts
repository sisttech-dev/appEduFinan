import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  position: absolute;
`;

export const RodaVida = styled.TouchableOpacity`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
background-color: ${({ theme }) => theme.COLORS.RED};
flex: 1;
align-items: center;
justify-content: center;
  
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;

export const Btn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  position: relative;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 5%;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
 


`;
