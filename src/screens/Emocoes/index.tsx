
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import imgEmocoes from '@assets/Emocoes.png'
import React, { useState } from 'react';
import { Alert } from 'react-native';

export function Emocoes() {
    const navigation = useNavigation();

    const [emocoes, setEmocoes] = useState([
        { name: "Empolgado", active: false },
        { name: "Encorajado", active: false },
        { name: "Confiante", active: false },
        { name: "Consciente", active: false },
        { name: "Criativo", active: false },
        { name: "Animado", active: false },
        { name: "Otimista", active: false },
        { name: "Concentrado", active: false },
        { name: "Orgulhoso", active: false },
        { name: "Motivado", active: false },
        { name: "Esperançoso", active: false },
        { name: "Alegre", active: false },
    ]);

    function handleBtnProx() {
        const activeEmocoes = emocoes.filter((emocao) => emocao.active == true).map((emocao) => emocao.name).join(", ");
        navigation.navigate('metas',  activeEmocoes );

    }

    const handleButtonPress = (item) => {
        let emocoesCopy = [...emocoes];

        const index = emocoesCopy.findIndex((emocao) => {
            return emocao.name == item.name;
        })

        let emocao = { ...emocoesCopy[index] };

        if (emocao.active) {
            emocao.active = false;
        } else {
            emocao.active = true;
        }

        emocoesCopy[index] = emocao;
        setEmocoes(emocoesCopy);
    };


    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Como estão suas emoções antes de começar o objetivo?
                </S.TextHeader>
                <S.Img source={imgEmocoes} />
            </S.Header>

            {/* Emoçoes */}
            <S.Emocao>
                {
                    emocoes.map((item, index) =>
                        <S.btnBody key={index}>
                            <S.btnAdd onPress={() => handleButtonPress(item)} 
                            style={{ backgroundColor: item.active ? '#FF4673' : 'black' }} >
                                <S.Text>{item.name}</S.Text>
                            </S.btnAdd>
                        </S.btnBody>
                    )
                }
            </S.Emocao>

            <S.btnProx onPress={handleBtnProx}>
                <S.proxText>
                    Proximo
                </S.proxText>
            </S.btnProx>

        </S.Container>
    )
}
