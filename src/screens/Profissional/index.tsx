
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';


export function Profissional() {
    const navigation = useNavigation();

    function handleRealizacao() {
        navigation.navigate('realizacao');
    }
    function handleSocial() {
        navigation.navigate('social');
    }
    function handleFinan() {
        navigation.navigate('financeiro');
    }
    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
                Profissional 
            </S.TextHeader>

                {/* Seções da roda da vida */}
            <S.Items>

                <S.Hobbies onPress={handleSocial}>
                    <S.Text>
                        Contribuição Social
                    </S.Text>
                </S.Hobbies>

                <S.Felicidade onPress={handleFinan}>
                    <S.Text>
                        Recursos Financeiros 
                    </S.Text>
                </S.Felicidade>

                <S.Espiritualidade onPress={handleRealizacao}>
                    <S.Text>
                        Realização
                    </S.Text>
                </S.Espiritualidade>

            </S.Items> 
        </S.Container>
    )
}
