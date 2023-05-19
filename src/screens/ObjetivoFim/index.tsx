
import { ScrollView } from 'react-native';
import * as S from './styles';
import imgObjFim from '@assets/imgObjFim.png'
import  React  from 'react';

export function ObjetivoFim() {

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.Img source={imgObjFim} />

                <S.TextHeader>
                   objetivo concluído
                </S.TextHeader>
                
            </S.Header>


            {/* Emoçoes */}
            <S.Emocao centerContent={false}>
            <S.TextEmocoes>
                descreva seus sentimentos após a conclusão do objetivo
            </S.TextEmocoes>
                <S.Botoes>
                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Empolgado
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Encorajado
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Confiante
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Consciente
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Criativo
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Animado
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Otimista
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Concentrado
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Orgulhoso
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Motivado
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Esperançoso
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>

                <S.btnBody>
                    <S.btnAdd>
                        <S.Text>
                            Alegre
                        </S.Text>
                    </S.btnAdd>
                </S.btnBody>
                </S.Botoes>
            </S.Emocao>
            <S.btnProx>
                <S.Text>
                    Continuar
                </S.Text>
            </S.btnProx>


        </S.Container>
    )
}
