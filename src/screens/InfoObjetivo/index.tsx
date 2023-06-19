
import * as S from './styles';
import React from 'react';
import objDefinido from '@assets/objDefinido.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';



export function InfoObjetivo({route}) {

    const navigation = useNavigation();


    {/* Aqui quando dar continuidade, concluir o objetivo */ }
    function handleFinalizar() {
        Alert.alert(
            'Confirmação',
            'Deseja finalizar o objetivo?',
            [
              {
                text: 'Não',
                style: 'cancel' 
              },
              {
                text: 'Sim',
                onPress: () => {
                  navigation.navigate('objetivoFim'); 
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
                   Objetivo
                </S.TituloHeader>
            </S.Header>


            {/* Nomes do objetivo definido antes, em metas */}
            <S.Emocao >
                <S.Img source={objDefinido} />


                <S.Objetivo>
                    <S.objetivoBody>
                        <S.Text>
                            Objetivo: {route.params?.objetivo}
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

            <S.btnProx onPress={handleFinalizar}>
                <S.btnText>
                    Finalizar objetivo
                </S.btnText>
            </S.btnProx>

        </S.Container>
    )
}
