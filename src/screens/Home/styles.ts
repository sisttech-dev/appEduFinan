import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";


export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 170px;
  background-color: ${({ theme }) => theme.COLORS.RED};
  `;

export const Body = styled.View`
 flex: 1;
 background-color: ${({ theme }) => theme.COLORS.WHITE};
    
  `;

export const Img = styled.Image`
  width: 50%;
  height: 170px;
`;

export const imgBody = styled.Image`
  width: 190px;
  height: 225px;
  margin:5px;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  width: 50%;
  text-align:left;
  padding-left: 5%;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  text-align: center;
  margin-top: 10%;
  margin-bottom: 15%;
`;

export const FlatList = styled.FlatList`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const btnHome = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  margin: 10px;
  border-radius: 50px;
`;

