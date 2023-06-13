import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Img = styled.Image`
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: left;
  justify-content: center;
  align-content: center;
  width: 130px;
  height: 50px;
  margin: 10px;
`;

export const TextBack = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  align-self: center;
  
`;

export const btnBody = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 150px;
  margin: 10px;
  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid red; /* Estilo de destaque para a imagem selecionada */
    `}
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

