import styled, { css } from "styled-components/native";
import { Switch, StyleSheet  } from 'react-native';


export const styles = StyleSheet.create({
    calendar: {
      width: '100%',
      aspectRatio: 1,
     
    },
  });
  
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const TextBack = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  align-self: center;
`;

export const btn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  position: relative;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  margin: 10px;
`;

export const BtnBack = styled.TouchableOpacity`
  background-color:${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 21%;
  height: 5%;
  margin-top: 70px;
`;