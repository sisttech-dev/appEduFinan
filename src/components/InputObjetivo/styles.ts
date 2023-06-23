import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`

  width: 100%;
  height: 50px;

  ${({ theme }) => css`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  `};
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 10px;
  border: 1px solid #fff;
  border-bottom-color: #000;
  margin-bottom: 25px;
`;