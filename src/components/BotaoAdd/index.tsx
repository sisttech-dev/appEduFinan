import { TouchableOpacityProps } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
}

export function BotaoAdd({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
            <Ionicons
                name='add'
                color={"#ffff"}
                size={35}
            />
        </Container>
    )
}