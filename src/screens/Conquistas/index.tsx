
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { BtnHelp } from '@components/BtnHelp';
import FotoPerfil from '@assets/FotoPerfil.png'
import Detalhe1 from '@assets/Detail1.png'
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons'


export function Conquistas() {

    return (
        <S.Container>
            {/* Falta apresentar na tela */}
            {/*   <S.imgDetail source={Detalhe1} />ntar na tela */}

            {/* Header */}
            <S.Header>

                <S.imgPerfil source={FotoPerfil} />

                <S.TextHeader >
                    Nome Aluno
                </S.TextHeader>
                <S.secTextHeader>
                    16 anos
                </S.secTextHeader>

                <S.BtnWallet>
                    <S.Text>
                        R$ 50,00
                    </S.Text>
                </S.BtnWallet>
            </S.Header>

            {/* Back */}
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

            {/* Conquistas registradas */}
            <S.ContainerBody>
                <S.btnBody>
                    <SimpleLineIcons
                        name='trophy'
                        color={"#ffff"}
                        size={30}
                    />
                    <S.TextConquest>
                        Título Conquista
                    </S.TextConquest>
                </S.btnBody>
                <S.btnBody>
                    <SimpleLineIcons
                        name='trophy'
                        color={"#ffff"}
                        size={30}
                    />
                    <S.TextConquest>
                        Título Conquista
                    </S.TextConquest>
                </S.btnBody>
                <S.btnBody>
                    <SimpleLineIcons
                        name='trophy'
                        color={"#ffff"}
                        size={30}
                    />
                    <S.TextConquest>
                        Título Conquista
                    </S.TextConquest>
                </S.btnBody>
                <S.btnBody>
                    <SimpleLineIcons
                        name='trophy'
                        color={"#ffff"}
                        size={30}
                    />
                    <S.TextConquest>
                        Título Conquista
                    </S.TextConquest>
                </S.btnBody>
                <S.btnBody>
                    <SimpleLineIcons
                        name='trophy'
                        color={"#ffff"}
                        size={30}
                    />
                    <S.TextConquest>
                        Título Conquista
                    </S.TextConquest>
                </S.btnBody>


            </S.ContainerBody>

        </S.Container>

    )
}
