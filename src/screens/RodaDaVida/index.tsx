
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory-native'

export function RodaDaVida() {
    const data = [
        { x: "Profissional", y: 9, color: "#FF4673" },
        { x: "Pessoal", y: 8, color: "#7FDBFF" },
        { x: "Relacionamento", y: 5, color: "#2ECC40" },
        { x: "Qualidade de vida", y: 10, color: "#FF851B" },
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

            {/* Roda da vida */}
            <S.RodaVida onPress={handleSec} >
                <VictoryChart polar
                    theme={VictoryTheme.material}>
                    {data.map((d, i) => (
                        <VictoryPolarAxis
                            key={i}
                            label={d.x}
                            labelPlacement="perpendicular"
                            style={{ ticks: { fontSize: 10 } }}
                            axisValue={d.x}
                        />
                    ))}

                    <VictoryBar
                        style={{
                            data: {
                                fill: ({ datum }) => datum.color,
                                width: 100,
                            },
                        }}
                        data= { data }
                        
                        animate={{
                            onLoad: { duration: 500 },
                            easing: "bounce"
                        }}
                    />
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
