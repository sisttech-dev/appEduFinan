
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'


export function QDeVida() {

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    QDeVida
                </S.TextHeader>
            </S.Header>

                {/* Atividades que o aluno adiciona */}

            <S.btnBody>
                <S.btnAdd >
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
