import { Props } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;

`;

export const ContainerInside = styled(TouchableOpacity) `
  width: 33%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED };
  justify-content: center;
  align-items: center;
`;
