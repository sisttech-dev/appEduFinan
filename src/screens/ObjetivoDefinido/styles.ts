import styled from "styled-components/native";


export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  height: 45%;
  position: relative;
  justify-content: baseline;
  align-items:center;

`;

export const Infos = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const objetivoBody = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
`;

export const teste = styled.View`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: space-around;
  width: 20%;
  height: auto;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  flex-direction: row;
`;

export const Objetivo = styled.View`
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 95%;
  
`;

export const Emocao = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  position: relative;
  border-top-left-radius: 90px;
  padding-top:15px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Img = styled.Image`
  position: absolute;
  width: 68%;
  height: 260px;
  top: -180px;
`;

export const TituloHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  text-align: center;
  position: relative;
  width: 100%;
  margin-top: 50px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: left;
  margin: 10px;
  width: 95%;
`;

export const btnText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
  justify-content: center;
  margin: 10px;
`;

export const btnProx = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  height: 65px;
  position: relative;
  
`;