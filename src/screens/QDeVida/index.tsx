
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';


export function QDeVida() {
    const navigation = useNavigation();

    function handleEspiritualidade() {
        navigation.navigate('espiritualidade');
    }
    function handleHobbies() {
        navigation.navigate('hobbies');
    }
    function handleFelicidade() {
        navigation.navigate('felicidade');
    }
    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
                Qualidade de Vida
            </S.TextHeader>

                {/* Seções da roda da vida */}
            <S.Items>

                <S.Hobbies onPress={handleHobbies}>
                    <S.Text>
                        Hobbies
                    </S.Text>
                </S.Hobbies>

                <S.Felicidade onPress={handleFelicidade}>
                    <S.Text>
                        Felicidade 
                    </S.Text>
                </S.Felicidade>

                <S.Espiritualidade onPress={handleEspiritualidade}>
                    <S.Text>
                        Espiritualidade
                    </S.Text>
                </S.Espiritualidade>

            </S.Items> 
        </S.Container>
    )
}
