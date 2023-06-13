
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryTooltip } from 'victory-native'

export function RodaDaVida() {
    const [selectedSession, setSelectedSession] = useState(null);
    const data = [
        {
            x: "Profissional", y: 10, color: "#FF4673",
            subData: [
                { label: "Contribuição", value: 3 },
                { label: "Financeiro", value: 3 },
                { label: "Realização", value: 4 }
            ]
        },

        {
            x: "Pessoal", y: 10, color: "#7FDBFF",
            subData: [
                { label: "Saúde", value: 2 },
                { label: "Intelectual", value: 5 },
                { label: "Emocional", value: 3 }
            ]
        },

        {
            x: "Relacionamento", y: 10, color: "#2ECC40",
            subData: [
                { label: "Família", value: 5 },
                { label: "Amoroso", value: 2 },
                { label: "Vida Social", value: 3 }
            ]
        },

        {
            x: "Qualidade de vida", y: 10, color: "#FF851B",
            subData: [
                { label: "Hobbies", value: 5 },
                { label: "Plenitude", value: 4 },
                { label: "Espiritualidade", value: 1 }
            ]
        },
    ];

    const navigation = useNavigation();

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

    return (

        <S.Container>
            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Roda da Vida
                </S.TextHeader>
            </S.Header>


            <S.Btn >
                <S.Text>
                    Editar Roda da vida
                </S.Text>
            </S.Btn>




            {/* Sessões Gerais, falta concluir, a ideia é pra cada sessao ter um valor e o aluno pode atribuir esses valores na roda */}
            <View
                style={[styles.sessoesContainer, { justifyContent: "center", alignItems: "center" }]}
            >
                <TouchableOpacity
                    style={[styles.sessao, { backgroundColor: "#aaa", marginBottom: 10 }]}
                    onPress={() => handleSessionClick("geral")}
                >
                    <Text style={styles.sessaoLabel}>Geral</Text>

                </TouchableOpacity>
            </View>
            <View style={[styles.sessoesContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                {data.slice(0, 2).map((d, i) => (
                    <TouchableOpacity key={i} style={[styles.sessao, { backgroundColor: d.color, marginRight: 10, marginBottom: 10 }]} onPress={() => handleSessionClick(i)}>
                        <Text style={styles.sessaoLabel}>{d.x}</Text>
                        <Text style={styles.sessaoValor}>{d.y}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={[styles.sessoesContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                {data.slice(2, 4).map((d, i) => (
                    <TouchableOpacity key={i} style={[styles.sessao, { backgroundColor: d.color, marginRight: 10 }]} onPress={() => handleSessionClick(i + 2)}>
                        <Text style={styles.sessaoLabel}>{d.x}</Text>
                        <Text style={styles.sessaoValor}>{d.y}</Text>
                    </TouchableOpacity> 
                ))}
            </View>




            {/* Roda da vida */}
            <S.RodaVida onPress={handleSec} >

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
                                onLoad: { duration: 500 },
                                easing: "bounce"
                            }}
                            labels={({ datum }) => `${datum.x}\n${datum.y}`}
                            labelComponent={<VictoryTooltip />}
                        />
                    ))}

                    {renderBars()}
                    
                </VictoryChart>
            </S.RodaVida>

            <S.Btn onPress={handleMeCuidar} >
                <S.Text>
                    Me cuidar
                </S.Text>
            </S.Btn>


        </S.Container>
    )
}

const styles = {
    sessoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    sessao: {
        alignItems: 'center',
        borderWidth: 1, // Adicione essa propriedade para definir a borda
        borderColor: '#000',
        width: 123,
    },
    sessaoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    sessaoValor: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
};
