import { Button, TouchableOpacity } from 'react-native';
import { Container, Text } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    nomeObjetivo: string;
    valor: string;
    date: string;
    emocoesInicio: string;
    emocoesFim: string;

}

export function Objetivo({ nomeObjetivo, valor, date, emocoesInicio, emocoesFim, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Text>
                {nomeObjetivo}
            </Text>
            <TouchableOpacity>
                <Button onPress={() => {props.remover({nomeObjetivo})}} title="Excluir" />
            </TouchableOpacity>
        </Container>

    );
}