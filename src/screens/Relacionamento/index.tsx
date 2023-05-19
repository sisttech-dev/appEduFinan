
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'


export function Relacionamento() {

    const navigation = useNavigation();

    function handleBtnAdd() {
        navigation.navigate('emocoes');
    }

    return (

        <S.Container>

            {/* Header */}
      
                <S.TextHeader>
                    Relacionamento
                </S.TextHeader>
         

            {/* Atividades que o aluno adiciona */}

            <S.btnBody>
                <S.btnAdd onPress={handleBtnAdd}>
                    <Ionicons
                        name='add'
                        color={"#ffff"}
                        size={35}
                    />
                </S.btnAdd>
            </S.btnBody>

        </S.Container>
    )
}
