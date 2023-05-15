
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import Header from '@assets/Header.jpg'
import Home01 from '@assets/Home01.png'
import Home02 from '@assets/Home02.png'
import Home03 from '@assets/Home03.png'
import { Alert, FlatList, TouchableOpacity } from 'react-native'
import { Title } from './../../components/Button/styles';
import { useNavigation } from '@react-navigation/native'

export function Home(props) {

  function handlePress(){
    const navigation = useNavigation();
    navigation.navigate('rodaDaVida');
  }
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


      {/* Body */}
      <S.Body>
    <S.Text>Atividades e curiosidades</S.Text>
        <S.FlatList
          data={[
            { image: Home01, key: 0 },
            { image: Home02, key: 1 },
            { image: Home03, key: 2 }
          ]}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={handlePress}>
            <S.imgBody source={item.image} key={item.key} />
            </TouchableOpacity>
          )}
          horizontal={true}
          
        />
      </S.Body>

      <NavBar />
    </S.Container>
  )
}
   