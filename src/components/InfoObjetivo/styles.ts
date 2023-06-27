import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;
export const Objetivo = styled.View`
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  height: 45px;
  margin: 5px;
  border-radius: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  text-align: left;
  margin: 10px;
`;