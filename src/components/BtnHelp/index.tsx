import {} from 'react-native'
import * as S from './styles'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

export function BtnHelp() {
    return (
      <S.Container >

        <S.ContainerInside>
          <Ionicons
          name='help-circle'
          color={"#FF4673"}
          size={40}
          />
        </S.ContainerInside>


      </S.Container>
      
    )
  }