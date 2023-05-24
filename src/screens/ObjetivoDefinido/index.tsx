
import { ScrollView } from 'react-native';
import * as S from './styles';
import imgObjFim from '@assets/imgObjFim.png'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Objetivo } from './../Metas/styles';

export function ObjetivoDefinido() {

    const navigation = useNavigation();

    {/* Aqui quando dar continuidade, voltar pra tela da sessao */ }
    function handleProx() {
        navigation.navigate('secoes');
    }

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TituloHeader>
                    Objetivo Definido!
                </S.TituloHeader>
                <S.Img source={imgObjFim} />
            </S.Header>


            {/* Nomes definidos antes, em metas */}
            <S.Emocao >

                <S.Objetivo>
                    <S.objetivoBody>
                        <S.Text>
                            Objetivo:
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Valor:
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Prazo:
                        </S.Text>
                    </S.objetivoBody>
                </S.Objetivo>
                
            </S.Emocao>

            <S.btnProx onPress={handleProx}>
                <S.Text>
                    Continuar
                </S.Text>
            </S.btnProx>

        </S.Container>
    )
}
