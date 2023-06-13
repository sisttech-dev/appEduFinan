
import * as S from './styles';
import React, { useState } from 'react';
import a1 from '@assets/A1.png'
import a2 from '@assets/A2.png'
import a3 from '@assets/A3.png'
import a4 from '@assets/A4.png'
import a5 from '@assets/A5.png'
import a6 from '@assets/A6.png'
import a7 from '@assets/A7.png'
import a8 from '@assets/A8.png'
import a9 from '@assets/A9.png'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export function PersoAvatar() {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);

    function handleImageClick(image) {
        setSelectedImage(image);
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


            {/* avatares */}
            <S.Container>
                <S.Row>
                    <S.btnBody selected={selectedImage === a2}
                        onPress={() => handleImageClick(a2)}>
                        <S.Img source={a2} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === a3}
                        onPress={() => handleImageClick(a3)}>
                        <S.Img source={a3} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === a4}
                        onPress={() => handleImageClick(a4)}>
                        <S.Img source={a4} />
                    </S.btnBody>
                </S.Row>

                <S.Row>
                <S.btnBody selected={selectedImage === a5}
                        onPress={() => handleImageClick(a5)}>
                    <S.Img source={a5} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === a6}
                        onPress={() => handleImageClick(a6)}>
                    <S.Img source={a6} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === a7}
                        onPress={() => handleImageClick(a7)}>
                    <S.Img source={a7} />
                    </S.btnBody>
                </S.Row>

                <S.Row>
                <S.btnBody selected={selectedImage === a8}
                        onPress={() => handleImageClick(a8)}>
                    <S.Img source={a8} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === a9}
                        onPress={() => handleImageClick(a9)}>
                    <S.Img source={a9} />
                    </S.btnBody>
                    
                    <S.btnBody selected={selectedImage === a1}
                        onPress={() => handleImageClick(a1)}>
                    <S.Img source={a1} />
                    </S.btnBody>
                </S.Row>

            </S.Container>
        </S.Container>

    )
}
