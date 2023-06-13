
import * as S from './styles';
import LNecessidades from '@assets/ListaNecessidades.png'
import Calendario from '@assets/Calendario.png'
import Meditacao from '@assets/Meditacao.png'
import Musica from '@assets/Musica.png'
import toCalendar from '@assets/imgCalendario.png'
import toMedi from '@assets/imgMeditacao.png'
import toNece from '@assets/imgNecessidades.png'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { BtnHelp } from '@components/BtnHelp';
import { useState } from 'react';

export function MapaMental(props) {
  const [selectedItem, setSelectedItem] = useState(null);
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
        <S.Lista1><S.toImg source={toNece} /></S.Lista1>
        <S.Lista2 ><S.toImg source={toMedi} /></S.Lista2>
        <S.Lista3 ><S.toImg source={toCalendar} /></S.Lista3>
        <S.Lista4 ><S.toImg source={toNece} /></S.Lista4>
      </S.Body>

      <S.Content>
        <S.Img source={LNecessidades} />
      </S.Content>

      <BtnHelp />
    </S.Container>
  )
}
