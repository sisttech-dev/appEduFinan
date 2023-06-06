
import * as S from './styles';
import FotoPerfil from '@assets/FotoPerfil.png'
import Detalhe1 from '@assets/Detail1.png'
import { VictoryBar, VictoryChart, VictoryLabel, VictoryPie, VictoryTheme } from 'victory-native'
import React, { useState } from 'react';

export function Wallet() {
    const [subData, setSubData] = useState([]);
    const data = [
        {
            x: "Profissional", color: "#FF4673",
            subData: [
                { label: "Contribuição", value: 3 },
                { label: "Financeiro", value: 3 },
                { label: "Realização", value: 4 }
            ],
        },
        {
            x: "Pessoal", color: "#7FDBFF",
            subData: [
                { label: "Saúde", value: 5 },
                { label: "Intelectual", value: 8 },
                { label: "Emocional", value: 1 }
            ],
        },
        {
            x: "Relacionamento", color: "#2ECC40",
            subData: [
                { label: "Família", value: 8 },
                { label: "Amoroso", value: 2 },
                { label: "Vida Social", value: 3 }
            ],
        },
        {
            x: "Qualidade de vida", color: "#FF851B",
            subData: [
                { label: "Hobbies", value: 9 },
                { label: "Plenitude", value: 7 },
                { label: "Espiritualidade", value: 3 }
            ],
        },
    ];




    const handleSectionClick = (sectionData) => {
        setSubData(sectionData.subData);
    };


    return (

        <S.Container>
            {/* Falta apresentar na tela */}
            {/*   <S.imgDetail source={Detalhe1} /> */}

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
                    <S.Secao onPress={() => handleSectionClick(data[3])}
                        style={{ backgroundColor: data[3].color }}>
                        <S.TextSecao>
                            Qualidade de vida
                        </S.TextSecao>
                    </S.Secao>

                    <S.Secao onPress={() => handleSectionClick(data[2])}
                     style={{ backgroundColor: data[2].color }}>
                        <S.TextSecao>
                            Relacionamento
                        </S.TextSecao>
                    </S.Secao>

                    <S.Secao onPress={() => handleSectionClick(data[0])}
                     style={{ backgroundColor: data[0].color }}>
                        <S.TextSecao>
                            Profissional
                        </S.TextSecao>
                    </S.Secao>

                    <S.Secao onPress={() => handleSectionClick(data[1])}
                     style={{ backgroundColor: data[1].color }}>
                        <S.TextSecao>
                            Pessoal
                        </S.TextSecao>
                    </S.Secao>
                </S.Secoes>

                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={10}
                    maxDomain={{y:10}} innerRadius={30}
                >
                    <VictoryPie
                        data={subData}
                        colorScale={subData.map((item) => item.color)}
                        style={{
                            data: {
                                fill: ({ datum }) => datum.color // Define a cor de cada fatia com base na propriedade "color"
                            },
                            labels: {
                                fill: 'black',
                                fontSize: 12,
                                fontWeight: 'bold',
                                padding: 5,
                                textAnchor: 'middle',
                                verticalAnchor: 'middle'

                            }
                        }}
                        labelComponent={<VictoryLabel renderInPortal />}
                        labelRadius={80} // Define a distância dos rótulos a partir do centro do gráfico
                        domain={[0, 10]} // Define o valor máximo do gráfico como 10
                        labels={({ datum }) => `${datum.label}: ${datum.value}`} // Exibe o rótulo com o valor
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
