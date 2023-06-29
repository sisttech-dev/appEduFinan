
import * as S from './styles';
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import DetalhesObj from '@assets/DetalhesObj.png'
import CheckBox from 'react-native-check-box'
import { objetivoCreate } from "@storage/objetivo/objetivoCreate";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { objetivoGetAll } from '@storage/objetivo/objetivoGetAll';
import { InputObjetivo } from '@components/InputObjetivo';
import { Alert } from 'react-native';
import { AppError } from '@utils/AppError';


export function Metas() {
    const [date, setDate] = useState('');
    const [nomeObjetivo, setNomeObjetivo] = useState('');
    const [valor, setValor] = useState('');

    const navigation = useNavigation();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const route = useRoute();
    const activeEmocoes = route.params;
    const stringObj = JSON.stringify(activeEmocoes);

    function handleCheckboxChange() {
        setIsCheckboxChecked(!isCheckboxChecked);
        if (!isCheckboxChecked) {
            setValor('Não envolve dinheiro');
        } else {
            setValor('');
        }
        saveData();
    }

    const saveData = async () => {
        try {
            const dataToStore = JSON.stringify({
                date,
                nomeObjetivo,
                valor,
                isCheckboxChecked
            });
            await AsyncStorage.setItem('metasData', dataToStore);
        } catch (error) {
            console.log('Erro ao salvar os dados no AsyncStorage:', error);
        }
    };

    async function handleDefinir() {
        
        try {
            if (nomeObjetivo.trim().length === 0 || valor.trim().length === 0 || date.trim().length === 0) {
                return Alert.alert('', 'Informe o objetivo.');
            }

            await objetivoCreate({ objetivo: nomeObjetivo, date, valor, stringObj });
            navigation.navigate('objetivoDefinido', { objetivo: nomeObjetivo, date, valor, stringObj});

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('', error.message);
            } else {
                Alert.alert('', 'Não foi possível criar o objetivo');
                console.log(error);
            }
        }
    }

    useEffect(() => {
        console.log(activeEmocoes)
    },[])


    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
                Objetivo
            </S.TextHeader>

            {/* Criaçao do objetivo */}
            <S.Objetivo>
                <S.Img source={DetalhesObj} />

                <InputObjetivo placeholder='Objetivo:'
                    value={nomeObjetivo}
                    onChangeText={setNomeObjetivo} />

                <InputObjetivo placeholder='Valor:'
                    keyboardType='numeric'
                    editable={!isCheckboxChecked}
                    value={valor}
                    onChangeText={setValor} />

                <S.MaskedInput placeholder='Data:'
                    type={'datetime'}
                    keyboardType='numbers-and-punctuation'
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    value={date}
                    onChangeText={text => { setDate(text) }}
                    ref={(ref) => this.datetimeField = ref}
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

