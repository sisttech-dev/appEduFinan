
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'
import React from 'react';


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


            {/* Body */}
            <S.Objetivo>

                <S.Input placeholder='Objetivo: ' />
                <S.Input placeholder='Valor: ' keyboardType='numeric' />
                <S.Input placeholder='Prazo : ' keyboardType='numbers-and-punctuation' />
                {/* um CheckBox aqui, validando se o objetivo não envolve dinheiro */}
            </S.Objetivo>

            {/* btn Continuar */}
            <S.btnBody>
                <S.btnAdd onPress={handleDefinir}>
                    <S.Text>Definir objetivo</S.Text>
                </S.btnAdd>
            </S.btnBody>

        </S.Container>
    )
}
