
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';


export function QDeVida() {
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
                Qualidade de Vida
            </S.TextHeader>

                {/* Seções da roda da vida */}
            <S.Items>

                <S.Hobbies onPress={handleVidaSocial}>
                    <S.Text>
                        Hobbies
                    </S.Text>
                </S.Hobbies>

                <S.Felicidade onPress={handleIntelectual}>
                    <S.Text>
                        Felicidade 
                    </S.Text>
                </S.Felicidade>

                <S.Espiritualidade onPress={handleFamilia}>
                    <S.Text>
                        Espiritualidade
                    </S.Text>
                </S.Espiritualidade>

            </S.Items> 
        </S.Container>
    )
}
