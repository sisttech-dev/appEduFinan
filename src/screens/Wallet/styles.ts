import styled from "styled-components/native";

export const Container = styled.ScrollView`
 background-color: ${({ theme }) => theme.COLORS.WHITE};

`;

export const ContainerBody = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.COLORS.WHITE};
align-items: center;
justify-content: baseline;
width: 100%;
margin: 20px;
display: flex;
flex-direction: column;
`;

export const Header = styled.View`
position: fixed;
width: 100%;
display: flex;
flex-direction: row;
width: 100%;
height: 170px;
background-color: ${({ theme }) => theme.COLORS.RED};
justify-content: space-between;
align-items: center;
border-bottom-left-radius: 50px;
`;

export const Secoes = styled.View`
flex-Direction: row;    
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
font-size: ${({ theme }) => theme.FONT_SIZE.LG};
position: relative;
justify-content: space-evenly;
align-items: center;
border-radius: 20px;  
width: 100%;
height: 15%;
`;

export const Secao = styled.TouchableOpacity`
background-color: ${({ theme }) => theme.COLORS.RED};
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
font-size: ${({ theme }) => theme.FONT_SIZE.LG};
position: relative;
justify-content: space-evenly;
align-items: start;
border-radius: 20px;  
width: 19%;
height: 80%;
`;

export const Img = styled.Image`
align-items: center;
justify-content: center;
width: 50%;
height: 100%;
`;

export const imgPerfil = styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 49px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.RED};
  position: fixed;
  margin-right: 50px;
`;

export const imgDetail = styled.Image`
  position: absolute;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: left;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const TextSecoes = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 10px;
`;

export const TextSecao = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin: 1%;
  position: absolute;
  top: 30%;
  left: 40%;
`;

export const secTextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  margin: 1%;
  position: absolute;
  top: 50%;
  left: 40%;
`;

export const BtnWallet = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  position: relative;
  justify-content: space-evenly;
  align-items: start;
  border-radius: 20px;  
  width: 80%;
  height: 20%;
  padding-left: 10px;
`;

