import { Props } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.RED};
  width: 100%;
  height: 60px;

`;

export const ContainerInside = styled(TouchableOpacity)`
  width: 32.8%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK };
  border-radius: 1px;
  margin: 1px;

`;
