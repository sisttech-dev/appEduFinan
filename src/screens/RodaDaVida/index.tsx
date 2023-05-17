
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory-native'

export function RodaDaVida() {
    const navigation = useNavigation();

    function handleSec() {
        navigation.navigate('secoes');
    }
    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Roda da Vida
                </S.TextHeader>
            </S.Header>

            {/* Roda da vida */}
            <S.RodaVida onPress={handleSec} >
                <VictoryChart polar
                    theme={VictoryTheme.material}

                >
                    {
                        ["Profissional", "Pessoal", "Relacionamento", "Qualidade de vida"].map((d, i) => {
                            return (
                                <VictoryPolarAxis 
                                    key={i}
                                    label={d}
                                    labelPlacement="perpendicular"
                                    style={{ tickLabels: { fontSize: 10 } }}
                                    axisValue={d}
                                />
                            );
                        })
                    }
                    <VictoryBar
                        style={{ data: { fill: "#FF4673", width: 100 } }}
                        data={[
                            { x: "Profissional", y: 8 },
                            { x: "Pessoal", y: 3 },
                            { x: "Relacionamento", y: 2 },
                            { x: "Qualidade de vida", y: 10 },
                        ]}
                        animate={{
                            onLoad: { duration: 500 },
                            easing: "bounce"
                        }}
                    />
                </VictoryChart>
            </S.RodaVida>

            <S.Btn>
                <S.Text>
                    Me cuidar
                </S.Text>
            </S.Btn>

            <NavBar />
        </S.Container>
    )
}
