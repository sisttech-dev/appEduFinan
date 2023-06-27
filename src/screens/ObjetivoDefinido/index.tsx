
import * as S from './styles';
import React, { useEffect, useState } from 'react';
import objDefinido from '@assets/objDefinido.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function ObjetivoDefinido() {
    //const [newObjetivo, setNewObjetivo] = React.useState(null);

    const navigation = useNavigation();
    const route = useRoute();
    const newObjetivo = route.params;

    {/* Aqui quando dar continuidade, voltar pra tela da sessao */ }
    function handleProx() {
        Alert.alert(
            'Objetivo Definido',
            '',
            [
                {
                    text: 'Ok',
                    onPress: () => {
                        navigation.navigate('secoes');
                    }
                }
            ]
        );
    }

    useEffect(() => {  
        console.log();
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
                            Objetivo: {newObjetivo.objetivo}
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Valor: R$ {newObjetivo.valor}
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Data: {newObjetivo.date}
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
