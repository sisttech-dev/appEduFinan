
import * as S from './styles';
import React, { useEffect, useState } from 'react';
import objDefinido from '@assets/objDefinido.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { objetivoRemoveByName } from '@storage/objetivo/objetivoRemoveByName';


export function InfoObjetivo() {
    const [objetivos, setObjetivos] = useState<string[]>([]);
    const navigation = useNavigation();
    const route = useRoute();
    const newObjetivo = route.params;

    async function clearLocalStorage() {
        try {
            await AsyncStorage.removeItem('metasData');
            console.log('Conteúdo do Local Storage removido com sucesso.');
            setObjetivos([]); // Limpa a lista de objetivos no estado
        } catch (error) {
            console.log('Erro ao remover conteúdo do Local Storage:', error);
        }
    }

    async function viewLocalStorage() {
        try {
            const keys = await AsyncStorage.getAllKeys();

            const values = await AsyncStorage.multiGet(keys);

            values.forEach(([key, value]) => {
                console.log(`Chave: ${key}, Objetivos: ${value}`);

                // Parse o valor (que está em formato de string) para obter o objeto correspondente
                const parsedValue = JSON.parse(value);
                if (parsedValue && parsedValue.length > 0 && parsedValue[0].objetivo) {
                    // Parse o valor (que está em formato de string) para obter o objeto correspondente
    
                    // Acesse as propriedades do objeto
                    const objetivo = newObjetivo.objetivo;
                    const date = newObjetivo.date;
                    const valor = newObjetivo.valor;
    
                    console.log(`Objetivo: ${objetivo}`);
                    console.log(`Data: ${date}`);
                    console.log(`Valor: ${valor}`);
                } 
                });
            } catch (error) {
                console.log('Erro ao visualizar o conteúdo do Local Storage:', error);
            }
        }


    {/* quando dar continuidade, voltar pra tela da sessao */ }
    function handleProx() {
        Alert.alert(
            '',
            '',
            [{
                text: 'Ok',
                onPress: () => {
                    navigation.navigate('vidaSocial');
                }
            }]);
    }

    function handleExcluir() {
        const teste = JSON.stringify(newObjetivo);
        console.log(teste)
        Alert.alert(
            'Confirmação',
            'Deseja excluir este objetivo?',
            [
                {text: 'Cancelar', style: 'cancel',},
                {text: 'Confirmar',
                    onPress: async () => {
                        try {
                            await objetivoRemoveByName(teste);
                            navigation.navigate('vidaSocial');
                        } catch (error) {
                  console.log('Erro ao excluir o objetivo:', error);
                }
              },
            },
          ],
          { cancelable: false }
        );
      }
      
    useEffect(() => {
        viewLocalStorage();
    }, [])

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
                            Seu Objetivo
                        </S.Text>
                        <S.Text style={{ color: 'black' }}>
                            {newObjetivo.objetivo}
                        </S.Text>
                    </S.objetivoBody>

                    <S.Objetivo2>
                        <S.objetivoBody2>
                            <S.Text>
                                Valor
                            </S.Text>
                            <S.Text style={{ color: 'black' }}>
                                {newObjetivo.valor}
                            </S.Text>
                        </S.objetivoBody2>

                        <S.objetivoBody2>
                            <S.Text>
                                Data esperada
                            </S.Text>
                            <S.Text style={{ color: 'black' }}>
                                {newObjetivo.date}
                            </S.Text>
                        </S.objetivoBody2>
                    </S.Objetivo2>

                    <S.objetivoBody>
                        <S.Text>
                            Suas Emoções
                        </S.Text>
                        <S.Text style={{ color: 'black' }}>
                            {newObjetivo.stringObj}
                        </S.Text>
                    </S.objetivoBody>
                </S.Objetivo>

                <S.ContainerBtn>
                    <S.btnProx style= {{backgroundColor: 'green'}} >
                        <S.btnText>
                            Atingi o Objetivo
                        </S.btnText>
                    </S.btnProx>
                    <Button title="Excluir" onPress={handleExcluir} color="red" />
                </S.ContainerBtn>

            </S.Emocao>
        

        </S.Container>
    )
}
