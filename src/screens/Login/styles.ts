import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ContainerPig = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Logo = styled.Image`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 120px;
  height: 100px;
`;
export const LoginPig = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  
`;

export const TextSub = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-decoration: underline;
  margin-top: 5px;
  margin-bottom: 5px;
  
`;
export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  padding: 5px;
  margin: 5px;
  width: 250px;
  height: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ButtonLogin = styled.Button`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
`;


