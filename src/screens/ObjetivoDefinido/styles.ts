import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED};
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
  position: relative;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  height: 45px;
  margin: 5px;
  border-radius: 10px;
`;

export const Objetivo = styled.View`
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 95%;
  
`;

export const Emocao = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  position: relative;
  border-top-left-radius: 90px;
  padding-top:15px;
  align-items: center;
  justify-content: center;
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
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  text-align: center;
  position: relative;
  width: 100%;
  margin-top: 50px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  text-align: left;
  margin: 10px;
`;

export const btnText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
  justify-content: center;
  margin: 10px;
`;

export const btnProx = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0%;
`;