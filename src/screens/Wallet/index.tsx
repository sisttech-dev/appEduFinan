
import * as S from './styles';
import FotoPerfil from '@assets/FotoPerfil.png'
import Detalhe1 from '@assets/Detail1.png'
import { VictoryBar, VictoryChart, VictoryLabel, VictoryPie, VictoryPolarAxis, VictoryTheme, VictoryTooltip } from 'victory-native'
import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export function Wallet() {
    const [selectedSession, setSelectedSession] = useState(null);
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

    function renderBars() {
        if (selectedSession === "geral" || selectedSession === null) {
            return data.map((d, i) => (
                <VictoryBar
                    key={i}
                    style={{
                        data: {
                            fill: d.color,
                            width: 32,
                            stroke: "black",
                            strokeWidth: 2,
                        },
                    }}
                    data={d.subData.map((subD) => ({ x: subD.label, y: subD.value }))}
                    animate={{
                        onLoad: { duration: 500 },
                        easing: "bounce",
                    }}
                    labels={({ datum }) => `${datum.x}\n${datum.y}`}
                    labelComponent={<VictoryTooltip />}
                />
            ));
        } else {
            const sessionData = data.find((d) => d.x === selectedSession);
            if (sessionData && sessionData.subData) {
                return sessionData.subData.map((subD, i) => (
                    <VictoryBar
                        key={i}
                        style={{
                            data: {
                                fill: sessionData.color,
                                width: 32,
                                stroke: "black",
                                strokeWidth: 2,
                            },
                        }}
                        data={[{ x: subD.label, y: subD.value }]}
                        animate={{
                            onLoad: { duration: 500 },
                            easing: "bounce",
                        }}
                        labels={({ datum }) => `${datum.x}\n${datum.y}`}
                        labelComponent={<VictoryTooltip />}
                    />
                ));
            }
        }
    }

    function handleSessionClick(session) {
        setSelectedSession(session);
    }

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.imgPerfil source={FotoPerfil} />

                <S.TextContainer>
                    <S.TextHeader>Nome Aluno</S.TextHeader>
                    <S.secTextHeader>16 anos</S.secTextHeader>
                </S.TextContainer>
            </S.Header>

            <S.ContainerBody>
                {/* valor atual da carteira */}
                <S.WalletContainer>
                    <S.BtnWallet>
                        <S.Text>Carteira Virtual</S.Text>
                        <S.Text>R$ 50,00</S.Text>
                    </S.BtnWallet>
                </S.WalletContainer>

                <S.TextSecoes>
                    Seções da Roda da Vida
                </S.TextSecoes>

                    {/* Sessões Gerais, falta concluir, a ideia é pra cada sessao ter um valor e o aluno pode atribuir esses valores na roda */}
                <S.Row>

                    <S.Secoes >
                        {data.slice(0, 2).map((d, i) => (
                            <S.Secao key={i} style={{ backgroundColor: d.color, marginRight: 10 }} onPress={() => handleSessionClick(i)}>
                                <S.Text >{d.x}</S.Text>
                                <S.Text >{d.y}</S.Text>
                            </S.Secao>
                        ))}
                    </S.Secoes>

                    <S.Secoes >
                        {data.slice(2, 4).map((d, i) => (
                            <S.Secao key={i} style={{ backgroundColor: d.color, marginRight: 10 }} onPress={() => handleSessionClick(i + 2)}>
                                <S.Text >{d.x}</S.Text>
                                <S.Text >{d.y}</S.Text>
                            </S.Secao>
                        ))}
                    </S.Secoes>

                </S.Row>

                <VictoryChart
                    polar
                    theme={VictoryTheme.material}
                    maxDomain={{ y: 10 }}
                    innerRadius={30}>

                    <VictoryPolarAxis
                        dependentAxis
                        style={{
                            axis: { stroke: "none" },
                            grid: { display: "none" },
                        }}
                        tickValues={[]} // Remove as marcas de graduação
                        tickFormat={() => ""}
                    />
                    {data.map((d, i) => (
                        <VictoryPolarAxis
                            key={i}
                            label={d.x}
                            labelPlacement="perpendicular"
                            style={{
                                axis: { stroke: "none" },
                                grid: { display: "none" },
                                ticks: { size: 0 },
                                tickLabels: { fontSize: 10, padding: 5 }
                            }}
                            axisValue={d.x}
                            labelComponent={
                                <VictoryTooltip
                                    flyoutStyle={{ fill: d.color, stroke: 'none' }} // Define o fundo colorido com base na cor de cada seção
                                    style={{ fill: 'white' }} // Define a cor do texto das labels como branco

                                />
                            }
                        />
                    ))}
                    {data.map((d, i) => (

                        <VictoryBar
                            key={i}
                            style={{
                                data: {
                                    fill: d.color,
                                    width: 32,
                                    stroke: "black",
                                    strokeWidth: 2
                                },
                            }}
                            data={selectedSession === i ? d.subData.map((subD) => ({ x: subD.label, y: subD.value })) : []}

                            animate={{
                                onLoad: { duration: 200 },
                                easing: "bounce"
                            }}
                            labels={({ datum }) => `${datum.x}\n${datum.y}`}
                            labelComponent={<VictoryTooltip />}
                        />
                    ))}

                    {renderBars()}

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
