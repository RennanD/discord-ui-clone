import { CaretDown } from 'phosphor-react';
import { Container, Title } from './styles';

export function ServerName(): JSX.Element {
  return (
    <Container>
      <Title>Servidor de Teste</Title>
      <CaretDown size={20} weight="bold" color="#fff" />
    </Container>
  );
}
