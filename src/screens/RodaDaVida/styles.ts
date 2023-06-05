import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export const RodaVida = styled.TouchableOpacity`
  width: 80%;
  align-items: center;
  justify-content: center;
  margin: 10px;
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
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
`;

export const Btn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  position: relative;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 5%;
  border-radius: 50px;
  margin: 40px;
`;
