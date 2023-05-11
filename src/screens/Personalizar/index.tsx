
import * as S from './styles';
import Avatar from '@assets/Avatar.png'
import Pet from '@assets/Pet.png'
import rodaVida from '@assets/rodaVida.png'
import mapaMental from '@assets/mapaMental.png'
import coresApp from '@assets/coresApp.png'
import { Ionicons } from '@expo/vector-icons'

export function Personalizar() {

    return (

        <S.Container>

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

            {/* Mudar cores app */}
            <S.ContainerHead>

                <S.btnHead>
                    <S.Img5 source={coresApp}>
                    </S.Img5>

                    <S.Text>
                        Mude as cores do seu App aqui!
                    </S.Text>
                </S.btnHead>
            </S.ContainerHead>

            <S.Container2>
                {/* botoes esquerda */}
                <S.ContainerBody>

                    <S.btnBody>
                        <S.Img source={rodaVida}>
                        </S.Img>

                        <S.Text>
                            Personalizar Roda da vida
                        </S.Text>
                    </S.btnBody>

                    <S.btnBody2>
                        <S.Img3 source={Pet}>
                        </S.Img3>

                        <S.Text>
                            Escolha seu Pet
                        </S.Text>
                    </S.btnBody2>

                </S.ContainerBody>

                {/* botoes direita */}
                <S.ContainerBody>
                    <S.btnBody2>
                        <S.Img4 source={Avatar}>
                        </S.Img4>

                        <S.Text>
                            Mudar meu avatar
                        </S.Text>
                    </S.btnBody2>

                    <S.btnBody>
                        <S.Img2 source={mapaMental}>
                        </S.Img2 >

                        <S.Text>
                            Personalizar Mapa mental
                        </S.Text>
                    </S.btnBody>

                </S.ContainerBody>
            </S.Container2>

        </S.Container>

    )
}
