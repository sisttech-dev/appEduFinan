import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerScroll = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 10px;
`;


export const Header = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.RED};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  position: fixed;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.WHITE};
  
`;

export const Img = styled.Image`
  background-color: ${({ theme }) => theme.COLORS.RED};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: left;
  margin: 5px;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Btn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  position: relative;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 50px;


`;

export const Secoes = styled.View`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

`;

export const Secao = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  width: 100%;
  height: 25%;
  transform: ${({ isSelected }) => (isSelected ? 'scale(0.9)' : 'scale(1)')};
  elevation: 5; /* Adiciona sombra */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Setor = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  position: relative;
  justify-content: space-evenly;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  border: 1px #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;


