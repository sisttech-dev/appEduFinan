
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { BtnHelp } from '@components/BtnHelp';
import FotoPerfil from '@assets/FotoPerfil.png'
import Detalhe1 from '@assets/Detail1.png'
import { SimpleLineIcons, Octicons, AntDesign } from '@expo/vector-icons'

export function Personalizar() {

    return (

        <S.Container>
            <S.ContainerBody>
                <S.btnBody>
                    <S.Text>
                        Mude as cores do seu App aqui!
                    </S.Text>

                </S.btnBody>
            </S.ContainerBody>


            <S.ContainerBody>

                <S.btnBody>
                    <S.Text>
                        Personalizar Roda da vida
                    </S.Text>
                </S.btnBody>

                <S.btnBody>
                    <S.Text>
                       Escolha seu Pet
                    </S.Text>
                </S.btnBody>

                <S.btnBody>
                    <S.Text>
                       Mudar meu avatar
                    </S.Text>
                </S.btnBody>

                <S.btnBody>
                    <S.Text>
                       Personalizar Mapa mental
                    </S.Text>
                </S.btnBody>

            </S.ContainerBody>
        </S.Container>

    )
}
