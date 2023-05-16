
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import LNecessidades from '@assets/ListaNecessidades.png'
import Calendario from '@assets/Calendario.png'
import Meditacao from '@assets/Meditacao.png'
import Musica from '@assets/Musica.png'
import { Alert, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons'
import { BtnHelp } from '@components/BtnHelp';

export function MapaMental(props) {

  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('home');
  }

  return (

    <S.Container>
      
        {/* Imagens esquerda */}
      <S.BtnBack onPress={handleHome}>
        <Ionicons
          name='md-caret-back'
          color={"#ffff"}
          size={30}
        />
        <S.TextBack>
          Voltar
        </S.TextBack>
      </S.BtnBack>


      {/* Textos direita */}
      <S.Body>
        <S.Lista1 />
        <S.Lista2 />
        <S.Lista3 />
        <S.Lista4 />
      </S.Body>

      <S.Content>

        <S.Img source={LNecessidades} />

      </S.Content>

      <BtnHelp />
    </S.Container>
  )
}
