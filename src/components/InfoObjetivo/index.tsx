import { Container, Objetivo, Text } from './styles'


type Props = {
    nome: string
    valor: string
    date: string
}

export function InfoObjetivo({ nome, valor, date }: Props) {
    return (
        <Container>
            <Objetivo>
                <Text>{nome}</Text>
            </Objetivo>
            <Objetivo>
                <Text>{valor}</Text>
            </Objetivo>
            <Objetivo>
                <Text>{date}</Text>
            </Objetivo>
        </Container>
    )

}