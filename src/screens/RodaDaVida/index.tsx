
import * as S from './styles';
import { NavBar } from '@components/NavBar';
import { VictoryPolarAxis, VictoryTheme } from 'victory-native'


export function RodaDaVida() {

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Roda da vida
                </S.TextHeader>

            </S.Header>

            {/* Carrosel */}


            <S.RodaVida>

                <VictoryPolarAxis
                    labelPlacement="perpendicular"
                    label="perpendicular"
                    theme={VictoryTheme.material}
                />
                <VictoryPolarAxis dependentAxis
                    width={400}
                    height={400}
                    domain={[0, 10]}
                    theme={VictoryTheme.material}
                    standalone={false}
                />
            </S.RodaVida>

            <S.Btn/>



            <NavBar />
        </S.Container>
    )
}
