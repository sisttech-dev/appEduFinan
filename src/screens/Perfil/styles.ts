import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 170;
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: space-between;
  align-items: center;
`;

export const ContainerBody = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const viewHeader = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  display: flex;
  flex-direction: row;
  width: 40%;
`;

export const viewDados = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const txtNome = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    position: relative;
    
`;
  
export const txtIdade = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    position: relative;
    text-align: left;
`;

export const imgPerfil = styled.Image`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 50px;
`;

export const imgPet = styled.Image`
  width: 50px;
  height: 50px;
  margin-top: 45%;
  border-radius: 50px;
  right: 40;

`;

export const imgDetail = styled.Image`
  position: absolute;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const textBody = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  justify-content: center;
  align-content: center;
  position: relative;
  margin:10px;
`;

export const btnBody = styled.TouchableOpacity`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  height: 15%;
  border-radius: 10px;
  margin: 3.5%;
  display: flex;
  flex-direction: row;
  
`;


export const BtnWallet = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  position: relative;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
  height: 25%;
  

`;
