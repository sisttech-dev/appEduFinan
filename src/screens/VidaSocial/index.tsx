
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import * as S from './styles';
import { objetivoGetAll } from '@storage/objetivo/objetivoGetAll';
import React, { useCallback, useState, useEffect } from 'react';
import { Objetivo } from '@components/Objetivo';
import { Alert, FlatList } from 'react-native';
import { ListaVazia } from '@components/ListaVazia';
import { BotaoAdd } from '@components/BotaoAdd';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function VidaSocial() {
    const [objetivos, setObjetivos] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleBtnAdd() {
        navigation.navigate('emocoes');
    }

    function handleOpenObjetivo(item) {
        const { objetivo, date, valor, stringObj } = item;
        navigation.navigate('infoObjetivo', { objetivo, date, valor, stringObj });
    }

    async function clearLocalStorage() {
        try {
            await AsyncStorage.removeItem('@edu-finan:vidaSocial');
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
                console.log(`Chave: ${key}, Valor: ${value}`);
                const parsedValue = JSON.parse(value);
                if (parsedValue && parsedValue.length > 0 && parsedValue[0].objetivo) {
                // Parse o valor (que está em formato de string) para obter o objeto correspondente

                // Acesse as propriedades do objeto
                const objetivo = parsedValue[0].objetivo;
                const date = parsedValue[0].date;
                const valor = parsedValue[0].valor;

                console.log(`Objetivo: ${objetivo}`);
                console.log(`Data: ${date}`);
                console.log(`Valor: ${valor}`);
            } else {
                console.log('Objetivo não encontrado no valor do AsyncStorage.');
              }
            });
        } catch (error) {
            console.log('Erro ao visualizar o conteúdo do Local Storage:', error);
        }
    }


    async function fetchObjetivos() {
        try {
            const data = await objetivoGetAll();
            console.log(data)
            setObjetivos(data)
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchObjetivos()
    }, []))


    useEffect(() => {

        viewLocalStorage();
    }, [])

    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
                Vida Social
            </S.TextHeader>

            {/* Atividades que o aluno adiciona */}
            <FlatList
                data={objetivos}
                keyExtractor={(item) => item.objetivo.toString()}
                renderItem={({ item }) => (
                    <Objetivo 
                        onPress={() => handleOpenObjetivo(item)}
                        nomeObjetivo={item.objetivo}
                        valor={item.valor}
                        date={item.date}
                        emocoesInicio={item.stringObj}
                        emocoesFim={item.emocoesFim}
                    >
                    </Objetivo>
                )}
                contentContainerStyle={objetivos.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListaVazia message="Nenhum objetivo definido até agora!" />
                )}
            />


            {/*Botao para adicionar um novo objetivo */}
            <S.btnBody>
                <BotaoAdd title={''} onPress={handleBtnAdd} />
                <BotaoAdd title={'reset'} onPress={clearLocalStorage} />
            </S.btnBody>

        </S.Container>
    )
}
