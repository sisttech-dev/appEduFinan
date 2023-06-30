import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.RED};
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  height: 40%;
  position: relative;
  justify-content: baseline;
  align-items:center;
  
`;

export const TituloHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  text-align: center;
  position: relative;
  width: 100%;
  shadow-color: black;
  shadow-offset: 0px -3px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 2;
  margin: 10px;
`;

export const objetivoBody = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 5px;
  border-radius: 15px;
  border: 2px;
`;

export const objetivoBody2 = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  width: 48.5%;
  height: auto;
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  border: 2px;
`;

export const Objetivo = styled.View`
  align-items: center;
  width: 95%;
  margin-top: 30px;
`;

export const Objetivo2 = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  
`;

export const Emocao = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 100%;
  border-top-left-radius: 60px;
  align-items: center;
  shadow-color: black;
  shadow-offset: 0px -3px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 2;
`;

export const Img = styled.Image`
  position: absolute;
  width: 52%;
  height: 200px;
  top: -190px;
`;


export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  margin: 3px;
`;

export const btnText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
`;

export const btnProx = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREENBTN};
  width: 70%;
  height: 45px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  elevation: 2;
  border-radius: 55px;
  
`;