import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' ;

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 55px;
  height: 55px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.BLACK : theme.COLORS.RED_DARK};
  border-radius: 150px;
  justify-content: center;
  align-items: center;
  margin:20px
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;