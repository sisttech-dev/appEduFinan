
import * as S from './styles';
import FotoPerfil from '@assets/FotoPerfil.png'
import Detalhe1 from '@assets/Detail1.png'
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory-native'

export function Wallet() {
    const data = [
        { x: "Profissional", y: 9, color: "#FF4673" },
        { x: "Pessoal", y: 8, color: "#7FDBFF" },
        { x: "Relacionamento", y: 5, color: "#2ECC40" },
        { x: "Qualidade de vida", y: 10, color: "#FF851B" },
      ];
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


            {/* valor atual da carteira */}
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
                            Relacionamento
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

                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={10}
                >
                    <VictoryBar
                        style={{ data: { fill: "#c43a31" } }}
                        data={data}
                    />
                </VictoryChart>
                {/* valor dos objetivos atuais da roda da vida */}

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
