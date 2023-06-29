
import * as S from './styles';
import React, { useEffect, useState } from 'react';
import objDefinido from '@assets/objDefinido.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function ObjetivoDefinido() {

    const navigation = useNavigation();
    const route = useRoute();
    const newObjetivo = route.params;

    async function viewLocalStorage() {
        try {
            const keys = await AsyncStorage.getAllKeys();

            const values = await AsyncStorage.multiGet(keys);

            values.forEach(([key, value]) => {
                console.log(`Chave: ${key}, Valor: ${value}`);

                // Parse o valor (que está em formato de string) para obter o objeto correspondente
                const parsedValue = JSON.parse(value);

                // Acesse as propriedades do objeto
                const objetivo = parsedValue[0].objetivo;
                const date = parsedValue[0].date;
                const valor = parsedValue[0].valor;
                const activeEmocoes = parsedValue[0].activeEmocoes;

                console.log(`Objetivo: ${objetivo}`);
                console.log(`Data: ${date}`);
                console.log(`Valor: ${valor}`);
                console.log(`Valor: ${activeEmocoes}`);
            });
        } catch (error) {
            console.log('Erro ao visualizar o conteúdo do Local Storage:', error);
        }
    }


    {/* quando dar continuidade, voltar pra tela da sessao */ }
    function handleProx() {
        Alert.alert(
            'Objetivo Definido',
            '',
            [{
                text: 'Ok',
                onPress: () => {
                    navigation.navigate('secoes');
                }
            }]);
    }

    useEffect(() => {
        console.log();
        console.log(newObjetivo)
        viewLocalStorage();
    }, [
    ])

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TituloHeader>
                    Objetivo Definido!
                </S.TituloHeader>
            </S.Header>


            {/* Nomes do objetivo definido antes, em metas */}
            <S.Emocao >
                <S.Img source={objDefinido} />

                <S.Objetivo>
                    <S.objetivoBody>
                        <S.Text>
                            {newObjetivo.objetivo}
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Valor: R${newObjetivo.valor}
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Data: {newObjetivo.date}
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Emoções: {newObjetivo.stringObj}
                        </S.Text>
                    </S.objetivoBody>
                </S.Objetivo>

            </S.Emocao>

            <S.btnProx onPress={handleProx}>
                <S.btnText>
                    Continuar
                </S.btnText>
            </S.btnProx>

        </S.Container>
    )
}
