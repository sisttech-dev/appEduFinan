import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Row = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerBody = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: column;
`;

export const Header = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.RED};
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 50px;
  height: 20%;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;
export const WalletContainer = styled.View`
  align-items: center; 
`;

export const BtnWallet = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  border:10px solid #fff;
  position: relative;
  padding: 10px;
  width:100%;
  border-radius:30px;
`;

export const Secoes = styled.View`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  justify-content: space-evenly;
  align-items: center;
  flex-Direction: row;    
  border-radius: 20px;  
  align-items:center;
`;

export const Secao = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  position: relative;
  justify-content: center;
  align-items: center;

  border-radius: 10px;  
  width: 75px;
  height: 50px;
`;

export const imgPerfil = styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 49px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.RED};  
  position: fixed;
`;

export const imgDetail = styled.Image`
  position: absolute;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};  
`;

export const TextSecoes = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
  justify-content: center;
  width: 100%;  
`;

export const TextSecao = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;

`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};  
  margin-left: 10px;
`;

export const secTextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  margin-left: 10px;  
`;

