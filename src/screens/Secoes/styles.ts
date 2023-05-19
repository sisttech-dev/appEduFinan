import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Center } from 'native-base';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

`;
export const btnBody = styled.View`
  justify-content: center;
  align-items: flex-end;
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
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  text-align: center;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;

export const Items = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
`;

// Esses componentes abaixo variam de tamanho 
// de acordo com a quantidade de pontos definidos pelo aluno posteriomente
export const Profissional = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100px;
  height: 100px;
  border-radius: 80px;
  position: absolute;
  top: 300px;
  left: 50px;
  align-items: center;
  justify-content: center;
`;
export const Pessoal = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 160px;
  height: 160px;
  border-radius: 80px;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 300px;
  right: 50px;
  align-items: center;
  justify-content: center;
`;

export const QDeVida = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 110px;
  height: 110px;
  border-radius: 80px;
  position: absolute;
  top: 50px;
  right: 50px;
  align-items: center;
  justify-content: center;
`;

export const Relacionamento = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 150px;
  height: 150px;
  border-radius: 80px;
  position: absolute;
  top: 50px;
  left: 50px;
  align-items: center;
  justify-content: center;
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