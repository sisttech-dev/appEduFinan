
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

import { Ionicons, FontAwesome } from '@expo/vector-icons'
import FloatingComponent from './FloatingComponent';

export function Secoes() {
    const navigation = useNavigation();

    function handleRelacionamento() {
      navigation.navigate('relacionamento');
    }
    function handlPessoal() {
      navigation.navigate('pessoal');
    }
    function handleProfissional() {
      navigation.navigate('profissional');
    }
    function handleQDeVida() {
      navigation.navigate('qDeVida');
    }

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Seções
                </S.TextHeader>
            </S.Header>

            <S.Items>
                {/* Seções */}

                <S.Profissional onPress={handleProfissional}>
                    <S.Text>
                        Profissional
                    </S.Text>
                </S.Profissional>

                <S.Pessoal onPress={handlPessoal}>
                    <S.Text>
                        Pessoal
                    </S.Text>
                </S.Pessoal>

                <S.QDeVida onPress={handleQDeVida}>
                    <S.Text>
                        Qualidade de vida
                    </S.Text>
                </S.QDeVida>

                <S.Relacionamento onPress={handleRelacionamento}>
                    <S.Text>
                        Relacionamento
                    </S.Text>
                </S.Relacionamento>

            </S.Items>

        </S.Container>
    )
}
