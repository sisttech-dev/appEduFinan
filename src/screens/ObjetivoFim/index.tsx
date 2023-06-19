
import { Alert } from 'react-native';
import * as S from './styles';
import imgObjFim from '@assets/imgObjFim.png'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BtnEmocoes } from '@components/btnEmocoes';

export function ObjetivoFim() {

    const navigation = useNavigation();

    {/* Aqui quando dar continuidade, voltar pra tela da sessao */ }
    function handleProx() {
        Alert.alert(
            'Objetivo finalizado ',
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

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.Img source={imgObjFim} />

                <S.Infos>
                    <S.TituloHeader>
                        Objetivo concluído!
                    </S.TituloHeader>
                    <S.TextHeader>
                        Objetivo:
                    </S.TextHeader>
                    <S.TextHeader>
                        Gastos:
                    </S.TextHeader>
                    <S.TextHeader>
                        Prazo:
                    </S.TextHeader>

                    <S.TextRecompensa>
                        Recompensa:
                    </S.TextRecompensa>

                </S.Infos>
            </S.Header>


            {/* Emoçoes depois de finalizar o objetivo */}
            <S.Emocao >
                <S.TextEmocoes>
                    Quais são os sentimentos após a conclusão do objetivo?
                </S.TextEmocoes>
                <BtnEmocoes text="Empolgado" />
                <BtnEmocoes text="Encorajado" />
                <BtnEmocoes text="Confiante" />
                <BtnEmocoes text="Consciente" />
                <BtnEmocoes text="Criativo" />
                <BtnEmocoes text="Animado" />
                <BtnEmocoes text="Otimista" />
                <BtnEmocoes text="Concentrado" />
                <BtnEmocoes text="Orgulhoso" />
                <BtnEmocoes text="Motivado" />
                <BtnEmocoes text="Esperançoso" />
                <BtnEmocoes text="Alegre" />
            </S.Emocao>

            <S.btnProx onPress={handleProx}>
                <S.Text>
                    Finalizar
                </S.Text>
            </S.btnProx>

        </S.Container>
    )
}
