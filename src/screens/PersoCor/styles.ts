import styled, { css } from "styled-components/native";
import { Switch } from 'react-native';
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const TextBack = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  align-self: center;
`;

export const btnCor = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin: 10px;
`;
export const btnCor2 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  justify-content: center;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin: 10px;
`;
export const btnCor3 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  justify-content: center;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin: 10px;
`;

export const BtnBack = styled.TouchableOpacity`
  background-color:${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 21%;
  height: 5%;
  margin-top: 70px;
`;

export const SwitchButton = styled(Switch)`
  position: absolute;
  right: -60px;
  top: 15px;
  /* Estilos do interruptor deslizante... */
`;