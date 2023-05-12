import * as S from './styles';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import logoImg from '@assets/LogoSis.png'
import pigImg from '@assets/loginPig.jpg'
import { useState } from 'react';

export function Login(props) {  
    const navigation = useNavigation();

    function handleHome(){
      navigation.navigate('home');
    }

    return (
        //Login
        <S.Container>
            <S.Logo source={logoImg} />
            
            <S.Container>
                <S.Text>
                    Login
                </S.Text>
                <S.Input />

                <S.Text>
                    Senha
                </S.Text>
                <S.Input />

                <S.TextSub>
                    Esqueceu sua senha?
                </S.TextSub>
                <S.TextSub>
                    Me cadastrar
                </S.TextSub>
                <Button
                    title='Entrar'
                    onPress={handleHome}                 
                />
            </S.Container>

            <S.ContainerPig>
                <S.LoginPig source={pigImg} />

            </S.ContainerPig>
        </S.Container>
    );
}