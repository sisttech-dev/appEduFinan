import styled from "styled-components/native";
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    StatusBar,
} from 'react-native';

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
margin: 20px;
display: flex;
flex-direction: column;
`;

export const Lista = styled.View`
flex: 1;
margin-Top: 0px;
`;

export const Header = styled.View`
background-color: ${({ theme }) => theme.COLORS.RED};
width: 100%;
height: 130px;
justify-content: center;
align-items: center;
border-bottom-left-radius: 50px;
`;

export const Img = styled.Image`
align-items: center;
justify-content: center;
width: 52%;
height: 30%;
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
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  margin: 10px;
  padding: 5px;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  margin: 10%;
  position: relative;
  text-align: left;
 
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

export const Secoes = styled.View`  
flex : 1;
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
font-size: ${({ theme }) => theme.FONT_SIZE.LG};  
width: 100px;
height: 50px;
position: relative;
margin: 2px;
`;

export const Secao = styled.TouchableOpacity`
background-color: ${({ theme }) => theme.COLORS.RED};
justify-content: center;
align-items: center;
border-radius: 20px;  
height: 53px;
`;

export const TextSecao = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Item = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    scrollView: {
        margin: 20,
      },
    title: {
        fontSize: 32,
    },

});

