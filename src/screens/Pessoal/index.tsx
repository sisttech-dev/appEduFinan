
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'


export function Pessoal() {

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Pessoal
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
