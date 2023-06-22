import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
  margin-top: 5%;
  margin-bottom: 10%;
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
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

