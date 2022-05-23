import { UserRow } from '../UserRow';
import { Container, Role } from './styles';

export function UserList(): JSX.Element {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserRow nickname="Rennan Oliveira" />

      <Role>Disponivel - 1</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="Fulano 1" />
      <UserRow nickname="Fulano 2" />
      <UserRow nickname="Fulano 3" />
      <UserRow nickname="Fulano 4" />
      <UserRow nickname="Fulano 5" />
      <UserRow nickname="Fulano 6" />
      <UserRow nickname="Fulano 7" />
      <UserRow nickname="Fulano 8" />
    </Container>
  );
}
