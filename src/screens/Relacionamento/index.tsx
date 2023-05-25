
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'



export function Relacionamento() {

    const navigation = useNavigation();

    function handleFamilia() {
        navigation.navigate('familia');
    }
    function handleVidaSocial() {
        navigation.navigate('vidaSocial');
    }
    function handleRAmoroso() {
        navigation.navigate('rAmoroso');
    }

    return (

        <S.Container>

            {/* Header */}
      
                <S.TextHeader>
                    Relacionamento
                </S.TextHeader>
         
                <S.Items>
                {/* Seções */}

                <S.VidaSocial onPress={handleVidaSocial}>
                    <S.Text>
                        Vida Social
                    </S.Text>
                </S.VidaSocial>

                <S.RAmoroso onPress={handleRAmoroso}>
                    <S.Text>
                        Relacionamento amoroso
                    </S.Text>
                </S.RAmoroso>

                <S.Familia onPress={handleFamilia}>
                    <S.Text>
                        Família
                    </S.Text>
                </S.Familia>

            </S.Items>
            {/* Atividades que o aluno adiciona */}

        </S.Container>
    )
}
