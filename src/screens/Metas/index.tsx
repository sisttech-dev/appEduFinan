
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import React from 'react';
import DetalhesObj from '@assets/DetalhesObj.png'

export function Metas() {

    const navigation = useNavigation();

    function handleDefinir() {
        navigation.navigate('objetivoDefinido');
    }

    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
                Metas
            </S.TextHeader>

            {/* Criaçao do objetivo */}
            <S.Objetivo>
                <S.Img source={DetalhesObj} />
                <S.Input placeholder='Objetivo: ' />
                <S.Input placeholder='Valor: ' keyboardType='numeric' />
                <S.Input placeholder='Prazo : ' keyboardType='numbers-and-punctuation' />  
            </S.Objetivo>

                {/* um CheckBox aqui, validando se o objetivo não envolve dinheiro */}
            <S.Text>Objetivo não envolve dinheiro</S.Text>

            {/* btn concluir criaçao do objetivo */}
            <S.btnBody>
                <S.btnAdd onPress={handleDefinir}>
                    <S.Text>Definir objetivo</S.Text>
                </S.btnAdd>
            </S.btnBody>

        </S.Container>
    )
}
