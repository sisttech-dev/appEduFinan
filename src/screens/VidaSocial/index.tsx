
import { useFocusEffect, useNavigation } from '@react-navigation/native';
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

    function handleOpenObjetivo(objetivo: string) {
        navigation.navigate('infoObjetivo', { objetivo })
    }
    
    async function clearLocalStorage() {
        try {
            await AsyncStorage.removeItem('@edu-finan:vidaSocial');
            console.log('Conteúdo do Local Storage removido com sucesso.');
            setObjetivos([]); // Limpar a lista de objetivos no estado
        } catch (error) {
            console.log('Erro ao remover conteúdo do Local Storage:', error);
        }
    }

    async function viewLocalStorage() {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const items = await AsyncStorage.multiGet(keys);
      
          items.forEach(([key, value]) => {
            console.log(`Chave: ${key}, Valor: ${value}`);
          });
        } catch (error) {
          console.log('Erro ao visualizar o conteúdo do Local Storage:', error);
        }
      }
      

    async function fetchObjetivos() {
        try {
            const data = await objetivoGetAll();
            console.log(data[0].objetivo);
            setObjetivos(data)
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchObjetivos()
    }, []))

    
    useEffect(() => {  
        console.log();
        viewLocalStorage();
    }, [

    ])


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
                        emocoesInicio={item.emocoesInicio}
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
                <BotaoAdd title={'testes'} onPress={clearLocalStorage} />
            </S.btnBody>

        </S.Container>
    )
}
