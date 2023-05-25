
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'


export function Intelectual() {

    const navigation = useNavigation();

    function handleBtnAdd() {
        navigation.navigate('emocoes');
    }

    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
               Intelectual
            </S.TextHeader>

            <S.Items>
            {/* Atividades que o aluno adiciona */}
            </S.Items>

            {/*Botao para adicionar um novo objetivo */}
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
