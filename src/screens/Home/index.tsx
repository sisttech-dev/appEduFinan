
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import Header from '@assets/Header.jpg'
import Home01 from '@assets/Home01.png'
import Home02 from '@assets/Home02.png'
import Home03 from '@assets/Home03.png'
import { ScrollView, Center } from 'native-base'
import {Alert, FlatList} from 'react-native'

export function Home() {

  return (

    <S.Container>

      {/* Header */}
      <S.Header>
        <S.TextHeader>
          Vamos
          Aprender!
        </S.TextHeader>

        <S.Img source={Header} />
      </S.Header>

      {/* Carrosel */}


      <FlatList
        data={[
          { image: Home01, key: 0 },
          { image: Home02, key: 1 },
          { image: Home03, key: 2 }
        ]}
        renderItem={({ item, index }) => (
          <S.imgHome source={item.image} key={item.key} />
        )}
        horizontal={true}
        onEndReached={() => {
          
        }}
      />



      <NavBar />
    </S.Container>
  )
}
