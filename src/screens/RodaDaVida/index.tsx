
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryTooltip } from 'victory-native'

export function RodaDaVida() {
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
                { label: "Saúde", value: 5 },
                { label: "Intelectual", value: 8 },
                { label: "Emocional", value: 1 }
            ]
        },

        {
            x: "Relacionamento", y: 10, color: "#2ECC40",
            subData: [
                { label: "Família", value: 8 },
                { label: "Amoroso", value: 2 },
                { label: "Vida Social", value: 3 }
            ]
        },

        {
            x: "Qualidade de vida", y: 10, color: "#FF851B",
            subData: [
                { label: "Hobbies", value: 9 },
                { label: "Plenitude", value: 7 },
                { label: "Espiritualidade", value: 3 }
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
    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Roda da Vida
                </S.TextHeader>
            </S.Header>

            <S.Btn onPress={handleMeCuidar} >
                <S.Text>
                    Editar Roda da vida
                </S.Text>
            </S.Btn>

            {/* Sessões Gerais */}
            <View style={styles.sessoesContainer}>
                {data.map((d, i) => (
                    <View key={i} style={styles.sessao}>
                        <Text style={styles.sessaoLabel}>{d.x}</Text>
                        <Text style={styles.sessaoValor}>{d.y}</Text>
                    </View>
                ))}
            </View>

            {/* Roda da vida */}
            <S.RodaVida onPress={handleSec} >
                <VictoryChart polar theme={VictoryTheme.material} maxDomain={{y:10}} innerRadius={30}>
                    {data.map((d, i) => (
                        <VictoryPolarAxis
                            key={i}
                            label={d.x}
                            labelPlacement="perpendicular"
                            style={{ ticks: { fontSize: 10 } }}
                            axisValue={d.x}
                        />
                    ))}
                    {data.map((d, i) => (
                        
                        <VictoryBar
                            key={i}
                            style={{
                                data: {
                                    fill: d.color,
                                    width: 32,
                                    stroke:"black", strokeWidth: 2
                                },
                            }}
                            data={d.subData.map((subD) => ({ x: subD.label, y: subD.value }))}

                            animate={{
                                onLoad: { duration: 500 },
                                easing: "bounce"
                            }}
                            labels={({ datum }) => `${datum.x}\n${datum.y}`}
                            labelComponent={<VictoryTooltip />}
                        />
                    ))}
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginVertical: 20,
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    sessoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20,
    },
    sessao: {
        alignItems: 'center',
        borderWidth: 1, // Adicione essa propriedade para definir a borda
        borderColor: '#000',
    },
    sessaoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sessaoValor: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    rodaVida: {
        width: '80%',
        aspectRatio: 1,
    },
};
