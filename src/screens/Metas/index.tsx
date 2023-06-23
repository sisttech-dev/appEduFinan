
import * as S from './styles';
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import DetalhesObj from '@assets/DetalhesObj.png'
import CheckBox from 'react-native-check-box'
import { groupCreate } from "@storage/objetivo/objetivoCreate";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { groupsGetAll } from '@storage/objetivo/objetivoGetAll';
import { InputObjetivo } from '@components/InputObjetivo';
import { Alert } from 'react-native';
import { AppError } from '@utils/AppError';

export function Metas(this: any) {
    const [date, setDate] = useState('');
    const [nomeObjetivo, setNomeObjetivo] = useState('');
    const [Objetivo, setObjetivo] = useState('');
    const [valor, setValor] = useState('');
    const navigation = useNavigation();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [groups, setGroups] = useState<string[]>([]);



    function handleCheckboxChange() {
        setIsCheckboxChecked(!isCheckboxChecked);
        if (!isCheckboxChecked) {
            setValor('Não envolve dinheiro');
        } else {
            setValor('');
        }
        saveData();
    }

    const loadData = async () => {
        try {
            const storedData = await AsyncStorage.getItem('metasData');
            if (storedData !== null) {
                const parsedData = JSON.parse(storedData);
                setDate(parsedData.date);
                setNomeObjetivo(parsedData.NomeObjetivo);
                setValor(parsedData.valor);
                setIsCheckboxChecked(parsedData.isCheckboxChecked);
            }
        } catch (error) {
            console.log('Erro ao carregar os dados do AsyncStorage:', error);
        }
    };

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

            if (nomeObjetivo.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
            }

            await groupCreate(Objetivo)
            navigation.navigate('objetivoDefinido', { nomeObjetivo: nomeObjetivo, valor: valor, prazo: date });
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message);
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
                console.log(error);
            }
        }
    }

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

