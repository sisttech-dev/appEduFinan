
import * as S from './styles';
import React, { useState } from 'react';
import p1 from '@assets/p1.png'
import p2 from '@assets/p2.png'
import p3 from '@assets/p3.png'
import p4 from '@assets/p4.png'
import p5 from '@assets/p5.png'
import p6 from '@assets/p6.png'
import p7 from '@assets/p7.png'
import p8 from '@assets/p8.png'
import p9 from '@assets/p9.png'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export function PersoCor() {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);

    function handleImageClick(image) {
        setSelectedImage(image);
    }

    function handleButtonClick(button) {
        setSelectedButton(button);
    }

    return (

        <S.Container>

            {/* botão Voltar */}
            <S.BtnBack>
                <Ionicons
                    name='md-caret-back'
                    color={"#ffff"}
                    size={30}
                />
                <S.TextBack>
                    Voltar
                </S.TextBack>
            </S.BtnBack>


            {/* cores */}
            <S.Container>
                <S.btnCor>
                    <S.SwitchButton
                        value={selectedButton === 'button1'}
                        onValueChange={() =>
                            handleButtonClick(
                                selectedButton === 'button1' ? null : 'button1'
                            )
                        }
                    />
                </S.btnCor>

                <S.btnCor2>
                    <S.SwitchButton
                        value={selectedButton === 'button2'}
                        onValueChange={() =>
                            handleButtonClick(
                                selectedButton === 'button2' ? null : 'button2'
                            )
                        }
                    />
                </S.btnCor2>

                <S.btnCor3>
                    <S.SwitchButton
                        value={selectedButton === 'button3'}
                        onValueChange={() =>
                            handleButtonClick(
                                selectedButton === 'button3' ? null : 'button3'
                            )
                        }
                    />
                </S.btnCor3>
            </S.Container>
        </S.Container>

    )
}
