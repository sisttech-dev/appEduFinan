import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED};
  `;

export const Body = styled.View`
 flex: 1;
justify-content: center;
`;

export const Content = styled.View`
position: absolute;
top: 120;
right: 20;
width: 50%;
height: 65%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: row;
`;

export const Img = styled.Image`
position: relative;  
width: 90%;
height: 380px;
margin-right: 20;
`;

export const BtnBack = styled.TouchableOpacity`
      background-color:${({ theme }) => theme.COLORS.RED};
      font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      justify-content: space-evenly;
      flex-direction: row;
      justify-content: center;
      align-items: center;
     margin-top: 40;
     margin-left: 20;
     border-radius: 20;
     border: 1px #fff;
      width: 100;
      height: 5%;

  `;

export const TextBack = styled.Text`
color: ${({ theme }) => theme.COLORS.WHITE};
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
font-size: ${({ theme }) => theme.FONT_SIZE.SM};
margin-left: 10;
`;

export const Lista1 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 40%;
  height: 20%;
  border-top-right-radius: 40px;
`;
export const Lista2 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 40%;
  height: 20%;
`;
export const Lista3 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 40%;
  height: 20%;
`;
export const Lista4 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 40%;
  height: 20%;
  border-bottom-right-radius: 40px;
`;

