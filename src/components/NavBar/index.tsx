import {} from 'react-native'
import * as S from './style'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export function NavBar(props) {

  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate('home');
  }
  function handleRoda(){
    navigation.navigate('rodaDaVida');
  }
  function handlePerfil(){
    navigation.navigate('perfil');
  }



    return (
      <S.Container >

        <S.ContainerInside onPress={handleHome}>
          <Ionicons
          name='home'
          color={"#ffff"}
          size={30}
          />
        </S.ContainerInside>

        <S.ContainerInside onPress={handleRoda}>
          <FontAwesome
          name='pie-chart'
          color={"#ffff"}
          size={30}
          />
        </S.ContainerInside>

        <S.ContainerInside onPress={handlePerfil}>
          <FontAwesome
          name='user'
          color={"#ffff"}
          size={30}
          
          />
        </S.ContainerInside>

      </S.Container>
      
    )
  }