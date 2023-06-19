
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'



export function VidaSocial() {

    const navigation = useNavigation();

    function handleBtnAdd() {
        navigation.navigate('emocoes');
    }
    function handleFinalizarobj() {
        navigation.navigate('infoObjetivo');
    }
    return (

        <S.Container>

            {/* Header */}
            <S.TextHeader>
                Vida Social
            </S.TextHeader>

            <S.Items>
            {/* Atividades que o aluno adiciona */}
            
            <S.VidaSocial onPress={handleFinalizarobj}>
                    <S.Text>
                        Celular
                    </S.Text>
                </S.VidaSocial>

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
