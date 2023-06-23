
import * as S from './styles';
import React from 'react';
import objDefinido from '@assets/objDefinido.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';


export function ObjetivoDefinido() {

    const navigation = useNavigation();
    const route = useRoute();

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
                            Objetivo: {route.params?.nomeObjetivo}
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Valor: R$ {route.params?.valor}
                        </S.Text>
                    </S.objetivoBody>

                    <S.objetivoBody>
                        <S.Text>
                            Data: {route.params?.prazo}
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
