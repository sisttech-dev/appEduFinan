
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { BtnHelp } from '@components/BtnHelp';
import FotoPerfil from '@assets/FotoPerfil.png'
import Detalhe1 from '@assets/Detail1.png'
import { SimpleLineIcons, Octicons, AntDesign } from '@expo/vector-icons'


export function Wallet() {

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
            </S.Header>


            {/* botoes */}
            <S.ContainerBody>

                <S.BtnWallet>
                    <S.Text>
                        Carteira Virtual
                    </S.Text>
                    <S.Text>
                        R$ 50,00
                    </S.Text>
                </S.BtnWallet>

                <S.TextSecoes>
                    Seções da Roda da Vida
                </S.TextSecoes>

                <S.Secoes>
                    <S.Secao>
                        <S.TextSecao>
                            Qualidade de vida
                        </S.TextSecao>
                    </S.Secao>

                    <S.Secao>
                        <S.TextSecao>
                            Relações
                        </S.TextSecao>
                    </S.Secao>
                    <S.Secao>
                        <S.TextSecao>
                            Profissional
                        </S.TextSecao>
                    </S.Secao>
                    <S.Secao>
                        <S.TextSecao>
                            Pessoal
                        </S.TextSecao>
                    </S.Secao>


                </S.Secoes>

                <S.TextSecoes>
                    grafico
                </S.TextSecoes>


                <S.BtnWallet>
                    <S.Text>
                        Valor total da Roda da Vida
                    </S.Text>
                    <S.Text>
                        R$ 100,00
                    </S.Text>
                </S.BtnWallet>

            </S.ContainerBody>


        </S.Container>
    )
}
