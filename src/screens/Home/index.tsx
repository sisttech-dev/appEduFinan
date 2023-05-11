
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import Header from '@assets/Header.jpg'
import Home01 from '@assets/Home01.png'
import Home02 from '@assets/Home02.png'
import Home03 from '@assets/Home03.png'
import { ScrollView, Center } from 'native-base'


export function Home() {

  return (

    <S.Container>

      {/* Header */}
      <S.Header>
        <S.TextHeader>
          Vamos
          Aprender
        </S.TextHeader>

        <S.Img source={Header} />
      </S.Header>

      {/* Carrosel */}


      <Center>
        <ScrollView w={"300"} h={"500"}>

          <S.imgHome source={Home01} />
          <S.imgHome source={Home02} />
          <S.imgHome source={Home03} />

        </ScrollView>
      </Center>



      <NavBar />
    </S.Container>
  )
}
