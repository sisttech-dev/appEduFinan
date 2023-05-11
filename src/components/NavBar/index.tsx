import {} from 'react-native'
import * as S from './style'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

export function NavBar() {
    return (
      <S.Container >

        <S.ContainerInside>
          <Ionicons
          name='home'
          color={"#ffff"}
          size={30}
          />
        </S.ContainerInside>

        <S.ContainerInside>
          <FontAwesome
          name='pie-chart'
          color={"#ffff"}
          size={30}
          />
        </S.ContainerInside>

        <S.ContainerInside>
          <FontAwesome
          name='user'
          color={"#ffff"}
          size={30}
          />
        </S.ContainerInside>

      </S.Container>
      
    )
  }