import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const ContainerBody = styled.View`
flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.Image`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const imgDetail = styled.Image`
  position: absolute;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
`;

export const btnBody = styled.TouchableOpacity`

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  height: 20%;
  border-radius: 10px;
  margin: 3%;
  display: flex;
  flex-direction: row;
`;

