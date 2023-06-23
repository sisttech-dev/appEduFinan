import { Container, Message } from "./styles";

type Props = {
  message: string;
}

export function ListaVazia({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}