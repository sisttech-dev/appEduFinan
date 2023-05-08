import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  
`;

export const ButtonHome = styled.TouchableOpacity`
background-color: ${({ theme }) => theme.COLORS.BLACK};
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
`;
