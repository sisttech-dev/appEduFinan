
import * as S from './styles';
import React, { useState } from 'react';
import { useNavigation, useRoute  } from '@react-navigation/native';
import DetalhesObj from '@assets/DetalhesObj.png'
import CheckBox from 'react-native-check-box'

export function Metas() {
    const [data, setData] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [valor, setValor] = useState('');
    const navigation = useNavigation();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


    function handleDefinir() {
        navigation.navigate('objetivoDefinido', {objetivo:objetivo, valor:valor, data:data});
    }

    function handleCheckboxChange() {
        setIsCheckboxChecked(!isCheckboxChecked);
        if (!isCheckboxChecked) {
            setValor('Não envolve dinheiro');
        } else {
            setValor('');
        }
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

                <S.Input placeholder='Objetivo:'
                    value={objetivo}
                    onChangeText={setObjetivo} />

                <S.Input placeholder='Valor:'
                    keyboardType='numeric'
                    editable={!isCheckboxChecked}
                    value={valor}
                    onChangeText={setValor} />

                <S.MaskedInput
                    value={data}
                    placeholder='Prazo :'
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY',
                    }}
                    keyboardType='numbers-and-punctuation'
                    />

            </S.Objetivo>

            {/* Checkbox */}
            <S.TextCheck>
                <CheckBox
                    isChecked={isCheckboxChecked}
                    onClick={handleCheckboxChange}
                />
                Esse objetivo não envolve dinheiro
            </S.TextCheck>

            {/* btn concluir criaçao do objetivo */}
            <S.btnBody>
                <S.btnAdd onPress={handleDefinir}>
                    <S.Text>Definir objetivo</S.Text>
                </S.btnAdd>
            </S.btnBody>

        </S.Container>
    )
}
