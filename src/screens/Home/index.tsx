import * as S from './styles';
import React from 'react';
import Header from '@assets/Header.jpg'
import Home01 from '@assets/HomeLivro.png'
import Home02 from '@assets/RodaVidaPig.png'
import Home03 from '@assets/MMental.png'
import { MapaMental } from '@screens/MapaMental';
import { useNavigation } from '@react-navigation/native'
import { mapaMental } from '@assets/mapaMental.png';
import { StatusBar } from 'react-native';

export function Home(props) {

  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate(item.path, { item });
  };

  return (

    <S.Container>
      <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
          />

      {/* Header */}
      <S.Header>
        <S.TextHeader>
          Vamos
          Aprender!
        </S.TextHeader>

        <S.Img source={Header} />
      </S.Header>


      {/* Body */}
      <S.Body>
        <S.Text>Atividades e curiosidades</S.Text>

        <S.FlatList
          data={[
            { image: Home01, path:'mapaMental', key: 0 },
            { image: Home02, path:'rodaDaVida', key: 1 },
            { image: Home03, path:'mapaMental', key: 2 }
          ]}
          renderItem={({ item }) => (
            <S.btnHome onPress={() => handlePress(item)}>
              <S.imgBody source={item.image} key={item.key} />
            </S.btnHome>
          )}
          horizontal={true}
        />
      </S.Body>

      
    </S.Container>
  )
}
