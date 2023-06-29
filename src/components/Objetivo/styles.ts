import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100px;
  height: 100px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
`;