import { Container, Text } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    nomeObjetivo: string;
}

export function Objetivo({ nomeObjetivo, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Text>
                {nomeObjetivo}
            </Text>
        </Container>

    );
}