
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

export function PersoPet() {
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
                    <S.btnBody selected={selectedImage === p2}
                        onPress={() => handleImageClick(p2)}>
                        <S.Img source={p2} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === p3}
                        onPress={() => handleImageClick(p3)}>
                        <S.Img source={p3} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === p4}
                        onPress={() => handleImageClick(p4)}>
                        <S.Img source={p4} />
                    </S.btnBody>
                </S.Row>

                <S.Row>
                <S.btnBody selected={selectedImage === p5}
                        onPress={() => handleImageClick(p5)}>
                    <S.Img source={p5} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === p6}
                        onPress={() => handleImageClick(p6)}>
                    <S.Img source={p6} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === p7}
                        onPress={() => handleImageClick(p7)}>
                    <S.Img source={p7} />
                    </S.btnBody>
                </S.Row>

                <S.Row>
                <S.btnBody selected={selectedImage === p8}
                        onPress={() => handleImageClick(p8)}>
                    <S.Img source={p8} />
                    </S.btnBody>

                    <S.btnBody selected={selectedImage === p9}
                        onPress={() => handleImageClick(p9)}>
                    <S.Img source={p9} />
                    </S.btnBody>
                    
                    <S.btnBody selected={selectedImage === p1}
                        onPress={() => handleImageClick(p1)}>
                    <S.Img source={p1} />
                    </S.btnBody>
                </S.Row>

            </S.Container>
        </S.Container>

    )
}
