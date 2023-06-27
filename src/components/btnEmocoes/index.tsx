import { } from 'react-native'
import * as S from './styles'
import { useState } from 'react';

interface BtnEmocoesProps {
    text: string;
}

export function BtnEmocoes({ text }: BtnEmocoesProps) {

    const [buttonColor, setButtonColor] = useState('black');

    const handleButtonPress = () => {
        if (buttonColor === 'black') {
            setButtonColor('#FF4673');
        } else {
            setButtonColor('black');
        }
    };


    return (
        <S.btnBody>
            <S.btnAdd onPress={handleButtonPress} style={{ backgroundColor: buttonColor }} >
                <S.Text>{text}</S.Text>
            </S.btnAdd>
        </S.btnBody>

    );
}