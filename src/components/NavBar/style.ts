import { Props } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
`;

export const ContainerInside = styled(TouchableOpacity) `
  width: 33%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED };
  justify-content: center;
  align-items: center;
`;
