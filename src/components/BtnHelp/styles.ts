import { Props } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
  width: 10%;
  height: 38px;
  border-radius:50px;
  margin-left: 80%;
`;

export const ContainerInside = styled(TouchableOpacity) `
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
