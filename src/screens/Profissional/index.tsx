
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';


export function Profissional() {
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
                Profissional 
            </S.TextHeader>

                {/* Seções da roda da vida */}
            <S.Items>

                <S.Hobbies onPress={handleVidaSocial}>
                    <S.Text>
                        Contribuição Social
                    </S.Text>
                </S.Hobbies>

                <S.Felicidade onPress={handleIntelectual}>
                    <S.Text>
                        Recursos Financeiros 
                    </S.Text>
                </S.Felicidade>

                <S.Espiritualidade onPress={handleFamilia}>
                    <S.Text>
                        Realização
                    </S.Text>
                </S.Espiritualidade>

            </S.Items> 
        </S.Container>
    )
}
