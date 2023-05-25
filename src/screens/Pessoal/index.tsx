
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'


export function Pessoal() {
    const navigation = useNavigation();

    function handleFamilia() {
        navigation.navigate('familia');
    }
    function handleVidaSocial() {
        navigation.navigate('vidaSocial');
    }
    function handleIntelectual() {
        navigation.navigate('intelectual');
    }
    return (

        <S.Container>

            {/* Header */}

            <S.TextHeader>
                Pessoal
            </S.TextHeader>

            <S.Items>
                {/* Seções */}

                <S.Saude onPress={handleVidaSocial}>
                    <S.Text>
                        Saúde
                    </S.Text>
                </S.Saude>

                <S.Intelectual onPress={handleIntelectual}>
                    <S.Text>
                       Intelectual
                    </S.Text>
                </S.Intelectual>

                <S.Emocional onPress={handleFamilia}>
                    <S.Text>
                        Emocional
                    </S.Text>
                </S.Emocional>

            </S.Items>
            {/* Atividades que o aluno adiciona */}

        </S.Container>
    )
}
