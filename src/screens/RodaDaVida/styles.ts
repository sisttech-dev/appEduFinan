import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

`;

export const RodaVida = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  align-items: center;
  
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 170px;
  background-color: ${({ theme }) => theme.COLORS.RED};
`;

export const Img = styled.Image`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
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
`;

export const ButtonHome = styled.TouchableOpacity`
background-color: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
`;
