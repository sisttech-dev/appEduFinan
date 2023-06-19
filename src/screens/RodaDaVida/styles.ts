import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerScroll = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  position: fixed;
`;

export const RodaVida = styled.TouchableOpacity`
  width: 100%;
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
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
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
  width: 90%;
  height: 5%;
  border-radius: 50px;
  margin: 20px;
`;

export const Secoes = styled.View`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  justify-content: space-evenly;
  flex-Direction: row;    
  border-radius: 20px;  
  align-items:center;
`;

export const Secao = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;  
  padding: 4px;
  margin: 5px;
  width: 150px;
`;
