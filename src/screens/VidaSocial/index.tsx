
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { objetivoGetAll } from '@storage/objetivo/objetivoGetAll';
import React, { useCallback, useState } from 'react';
import { Objetivo } from '@components/Objetivo';
import { Alert, FlatList } from 'react-native';
import { ListaVazia } from '@components/ListaVazia';
import { BotaoAdd } from '@components/BotaoAdd';

export function VidaSocial() {
    const [objetivos, setObjetivos] = useState<string[]>([]);
    const navigation = useNavigation();

    function handleBtnAdd() {
        navigation.navigate('emocoes');
    }

    function handleOpenObjetivo(objetivos: string) {
        navigation.navigate('infoObjetivo', { objetivos })
    }


    async function fetchObjetivos() {
        try {
            const data = await objetivoGetAll();
            setObjetivos(data)
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchObjetivos()
    }, []))


    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
                Vida Social
            </S.TextHeader>

            <S.Items>
                {/* Atividades que o aluno adiciona */}
                <FlatList
                    data={objetivos}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Objetivo
                            onPress={() => handleOpenObjetivo(item)}
                            title={item}
                        />
                    )}
                    contentContainerStyle={objetivos.length === 0 && { flex: 1 }}
                    ListEmptyComponent={() => (
                        <ListaVazia message="Nenhum objetivo definido até agora!" />
                    )}
                />
            </S.Items>

            {/*Botao para adicionar um novo objetivo */}
            <S.btnBody>
                <BotaoAdd title={''} onPress={handleBtnAdd} />
            </S.btnBody>

        </S.Container>
    )
}
