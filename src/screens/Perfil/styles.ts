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

export const Carousel = styled.ScrollView`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  scroll-behavior: smooth;
  width:100%;
  height: 10%;
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
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
`;

export const textBody = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  justify-content: center;
  align-content: center;
  text-align: center;
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
  margin: 3%;
  display: flex;
  flex-direction: row;
`;

export const secTextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  margin: 1%;
  position: relative;
  left: -6%;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  margin: 1%;
  position: absolute;
  top: 20%;
  left: 40%;
`;


export const BtnWallet = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  position: relative;
  justify-content: center;
  align-items: start;
  border-top-left-radius: 10;
  border-bottom-left-radius: 10;
  width: 100%;
  height: 15%;
  padding-left: 10px;
`;

export const BtnWheel = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.RED};
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  position: absolute;
  top: 17%;
  left: 45%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 150px;
  height: 40px;
`;
