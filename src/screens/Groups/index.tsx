import * as S from './styles';
import { Button } from '@components/Button';
import logoImg from '@assets/LogoSis.png'
import pigImg from '@assets/loginPig.jpg'

export function Groups() {
    return (
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
                />
            </S.Container>
            <S.ContainerPig>
                <S.LoginPig source={pigImg} />
            </S.ContainerPig>
        </S.Container>


    );
}