
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import emocoes from '@assets/Emocoes.png'
import  { BtnEmocoes }  from '@components/btnEmocoes';
import React from 'react';

export function Emocoes() {
    const navigation = useNavigation();

    function handleBtnProx() {
        navigation.navigate('metas');
    }

    
    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Como estão suas emoções antes de começar o objetivo?
                </S.TextHeader>
                <S.Img source={emocoes} />
            </S.Header>

            {/* Emoçoes */}
            <S.Emocao>
              <BtnEmocoes text="Empolgado"/>
              <BtnEmocoes text="Encorajado"/>
              <BtnEmocoes text="Confiante"/>
              <BtnEmocoes text="Consciente"/>
              <BtnEmocoes text="Criativo"/>
              <BtnEmocoes text="Animado"/>
              <BtnEmocoes text="Otimista"/>
              <BtnEmocoes text="Concentrado"/>
              <BtnEmocoes text="Orgulhoso"/>
              <BtnEmocoes text="Motivado"/>
              <BtnEmocoes text="Esperançoso"/>
              <BtnEmocoes text="Alegre"/>
            </S.Emocao>

            <S.btnProx onPress={handleBtnProx}>
                <S.proxText>
                    Proximo
                </S.proxText>
            </S.btnProx>

        </S.Container>
    )
}
