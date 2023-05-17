
import * as S from './styles';
import emocoes from '@assets/Emocoes.png'

export function Emocoes() {

    return (

        <S.Container>

            {/* Header */}
            <S.Header>
                <S.TextHeader>
                    Como estão suas emoções antes de realizar a tarefa?
                </S.TextHeader>
                <S.Img source={emocoes} />
            </S.Header>

            {/* Emoçoes */}
            <S.Emocao>
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

            </S.Emocao>

        </S.Container>
    )
}
