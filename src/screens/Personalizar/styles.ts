import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`;

export const Container2 = styled.View`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const ContainerBody = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ContainerHead = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.Image`
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 80px;
  margin: 10px;
  margin-top: 20px;
  
`;

export const Img2 = styled.Image`
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 95px;
  margin-top: 25px;
  
`;

export const Img3 = styled.Image`
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 120px;
  margin: 16px;
`;

export const Img4 = styled.Image`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 80%;
  margin-top: 35px;
`;

export const Img5 = styled.Image`
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 100px;
  margin: 27px;
  margin-top: 10px;

`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: left;
  justify-content: center;
  align-content: center;
  width: 130px;
  height: 50px;
  margin: 10px;
`;

export const TextBack = styled.Text`
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
      font-size: ${({ theme }) => theme.FONT_SIZE.SM};
      margin-right: 38%;
      margin-top:4%;
    `;

export const btnBody = styled.TouchableOpacity`

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  text-align: left;
  position: relative;
  width: 160px;
  height: 150px;
  border-radius: 20px;
  display: flex;
  
`;

export const btnBody2 = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  position: relative;
  width: 160px;
  height: 210px;
  border-radius: 20px;
  margin: 5px;
  
`;

export const btnHead = styled.TouchableOpacity`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  background-color: ${({ theme }) => theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  height: 34%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom:3
  0px;
`;

export const BtnBack = styled.TouchableOpacity`
  background-color:${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  margin-top: 15%;
  border-radius: 10px;
  width: 60%;
  height: 5%;
  `;

