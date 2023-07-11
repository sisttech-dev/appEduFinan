import * as S from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import theme from '@theme/index';
import { useState, useRef, useEffect, useCallback } from 'react';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryContainer, VictoryTooltip } from 'victory-native'
import { Animated, Easing } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function RodaDaVida() {
    const buttonScale = useRef(new Animated.Value(1)).current;
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const navigation = useNavigation();

    const [data, setData] = useState([
        {
            sessao: "Profissional", valor: 10, color: theme.COLORS.GRAY_300,
            subData: [
                { label: "Contribuição", value: 3 },
                { label: "Financeiro", value: 3 },
                { label: "Realização", value: 4 }
            ]
        },

        {
            sessao: "Pessoal", valor: 10, color: theme.COLORS.RED,
            subData: [
                { label: "Saúde", value: 2 },
                { label: "Intelectual", value: 5 },
                { label: "Emocional", value: 3 }
            ]
        },

        {
            sessao: "Relacionamento", valor: 10, color: theme.COLORS.GREEN,
            subData: [
                { label: "Família", value: 5 },
                { label: "Amoroso", value: 2 },
                { label: "Vida Social", value: 3 }
            ]
        },

        {
            sessao: "Qualidade de vida", valor: 10, color: theme.COLORS.BLUE,
            subData: [
                { label: "Hobbies", value: 5 },
                { label: "Plenitude", value: 4 },
                { label: "Espiritualidade", value: 1 }
            ]
        },
    ]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@VidaSocial');

            if (value !== null) {
                const parsedData = JSON.parse(value);
                const tamanhoItens = parsedData.length;
                const valorExistente = 10;
                const resultado = tamanhoItens + valorExistente;

                setData(prevData => {
                    return prevData.map(section => {
                        if (section.sessao === "Relacionamento") {
                            return {
                                ...section,
                                valor: resultado
                            };
                        }
                        return section;
                    });
                });
            }
        } catch (error) {
            console.log(`Erro ao obter a quantidade de itens na chave "${'@VidaSocial'}":`, error);
        }
    };

    function handleButtonPressIn(index) {
        setSelectedButton(index);

        Animated.timing(buttonScale, {
            toValue: 0.9,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }).start();
    }

    function handleButtonPressOut() {
        setSelectedButton(null);

        Animated.timing(buttonScale, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }).start();
    }

    function handleSec() {
        navigation.navigate('secoes');
    }

    function handleMeCuidar() {
        navigation.navigate('meCuidar');
    }

    function handleSessionClick(session) {
        setSelectedSession(session);
    }

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
                        onLoad: { duration: 1000 },
                        easing: "bounce",
                    }}
                    labels={({ datum }) => `${datum.x}\n${datum.y}`}
                    labelComponent={<VictoryTooltip />}
                />
            ));
        } else {
            const sessionData = data.find((d) => d.sessao === selectedSession);
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
                            onLoad: { duration: 100 },
                            easing: "bounce",
                        }}
                        labels={({ datum }) => `${datum.x}\n${datum.y}`}
                        labelComponent={<VictoryTooltip />}
                    />
                ));
            }
        }
    }

    useFocusEffect(useCallback(() => {
        getData()
      },[]))
      

    return (
        <S.Container>
            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Roda da Vida
                </S.TextHeader>
            </S.Header>

            <S.ContainerScroll>
                {/* Roda da vida */}
                <S.RodaVida onPress={handleSec} >
                    <VictoryChart
                        polar
                        theme={VictoryTheme.material}
                        maxDomain={{ y: 10 }}
                        innerRadius={20}>

                        <VictoryPolarAxis
                            dependentAxis
                            style={{
                                axis: { stroke: "" },
                                grid: { display: "" },
                            }}
                            tickValues={[]} // Remove as marcas de graduação
                            tickFormat={() => ""}
                        />

                        {data.map((d, i) => (
                            <VictoryPolarAxis
                                key={i}
                                label={d.sessao}
                                labelPlacement="perpendicular"
                                style={{
                                    axis: { stroke: "none" },
                                    grid: { display: "none" },
                                    ticks: { size: 0 },
                                    tickLabels: { fontSize: 10, padding: 5 }
                                }}
                                axisValue={d.sessao}
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
                                    onLoad: { duration: 300 },
                                    easing: "bounce"
                                }}
                                labels={({ datum }) => `${datum.x}\n${datum.y}`}
                                labelComponent={<VictoryTooltip />}
                            />
                        ))}

                        {renderBars()}
                    </VictoryChart>
                </S.RodaVida>

                {/*  Geral */}
                <S.Secoes >
                    <S.Secao
                        style={{ backgroundColor: theme.COLORS.BLACK, marginBottom: 10 }}
                        onPressIn={() => handleButtonPressIn("geral")}
                        onPressOut={handleButtonPressOut}
                        onPress={() => handleSessionClick("geral")}
                    >
                        <S.Text>Geral</S.Text>
                    </S.Secao>
                </S.Secoes>

                {/* profissional e pessoal */}
                <S.Secoes >
                    {data.slice(0, 2).map((d, i) => (
                        <S.Secao
                            key={i}
                            style={{ backgroundColor: d.color, marginRight: 10 }}
                            onPressIn={() => handleButtonPressIn(i)}
                            onPressOut={handleButtonPressOut}
                            onPress={() => handleSessionClick(d.sessao)}
                        >
                            <S.Text>{d.sessao}</S.Text>
                            <S.Text>{d.valor}</S.Text>
                        </S.Secao>
                    ))}
                </S.Secoes>

                {/* relacionamento e qua de vida */}
                <S.Secoes >
                    {data.slice(2, 4).map((d, i) => (
                        <S.Secao
                            key={i}
                            style={{ backgroundColor: d.color, marginRight: 10 }}
                            onPressIn={() => handleButtonPressIn(i + 2)}
                            onPressOut={handleButtonPressOut}
                            onPress={() => handleSessionClick(d.sessao)}
                        >
                            <S.Text>{d.sessao}</S.Text>
                            <S.Text>{d.valor}</S.Text>
                        </S.Secao>
                    ))}
                </S.Secoes>

                <S.Btn>
                    <S.Text>Editar Roda da vida</S.Text>
                </S.Btn>

                <S.Btn onPress={handleMeCuidar}>
                    <S.Text>Me cuidar</S.Text>
                </S.Btn>

            </S.ContainerScroll>
        </S.Container>
    )
}
