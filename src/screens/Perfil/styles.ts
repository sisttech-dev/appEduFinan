import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 170;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius:50px;
  
`;

export const ContainerBody = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const viewHeader = styled.View`
  display: flex;
  flex-direction: row;
  width: 40%;
`;

export const viewDados = styled.View`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const txtNome = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    position: relative;
    
`;
  
export const txtIdade = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    position: relative;
    text-align: left;
`;

export const imgPerfil = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 15px;
  margin-left: 15px;
  border-radius: 50px;
`;

export const imgPet = styled.Image`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const textBody = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  justify-content: center;
  align-content: center;
  position: relative;
  margin:10px;
`;

export const btnBody = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  justify-content: center;
  align-items: center;
  height: 15%;
  border-radius: 15px;
  margin: 3.5%;
  display: flex;
  flex-direction: row;
  flex: 1;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const BtnWallet = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  border-radius: 10px;
  width: 90%;
  height: 35%;
  

`;
