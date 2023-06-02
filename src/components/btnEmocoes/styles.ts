import styled from "styled-components/native";

export const btnAdd = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100px;
  height: 35px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  position: relative;
`;

export const btnBody = styled.View`
  position:relative;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  margin: 10px;
`;