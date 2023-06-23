
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { groupsGetAll } from '@storage/objetivo/objetivoGetAll';
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
    function handleFinalizarobj() {
        navigation.navigate('infoObjetivo');
    }
    function handleOpenObjetivo(objetivos: string) {
        navigation.navigate('infoObjetivo', { objetivos })
    }


    async function fetchGroups() {
        try {
            const data = await groupsGetAll();
            setObjetivos(data)
        } catch (error) {
            Alert.alert('Turmas', 'Não foi possível carregar as turmas');
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
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
