import { Container, Title, HashIcon, Separator, Description } from './styles';

export function ChannelInfo(): JSX.Element {
  return (
    <Container>
      <HashIcon />
      <Title>Chat Livre</Title>
      <Separator />
      <Description> Chat livre para mensagens</Description>
    </Container>
  );
}
