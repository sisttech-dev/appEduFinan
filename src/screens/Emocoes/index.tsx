
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import emocoes from '@assets/Emocoes.png'
import { BtnEmocoes } from '@components/btnEmocoes';
import React, { useState } from 'react';
import { Emocao } from './../ObjetivoFim/styles';

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
        const activeEmocoes = emocoes.filter((emocao) => emocao.active == true)
        navigation.navigate('metas', activeEmocoes);

    }

    const [buttonColor, setButtonColor] = useState('black');

    const handleButtonPress = (item) => {
        let emocoesCopy = [...emocoes];

        const index = emocoesCopy.findIndex((emocao) => {
            return emocao.name == item.name;
        })

        let emocao = {...emocoesCopy[index]};
        emocao.active = true;
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
                <S.Img source={emocoes} />
            </S.Header>

            {/* Emoçoes */}
            <S.Emocao>
                <S.btnBody>
                    <S.btnAdd style={{ backgroundColor: buttonColor }} >
                        <S.Text>{emocoes.length}</S.Text>
                    </S.btnAdd>
                </S.btnBody>
                {

                    emocoes.map((item, index) =>
                        <S.btnBody>
                            <S.btnAdd onPress={()=>handleButtonPress(item)} style={{ backgroundColor: item.active ? '#FF4673' : buttonColor }} >
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
