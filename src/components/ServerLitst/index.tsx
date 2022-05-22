import { ServerButton } from '../ServerButton';
import servers from './servers';
import { Container, Separator } from './styles';

export function ServerLitst(): JSX.Element {
  return (
    <Container>
      <ServerButton selected mentions={0} notification={false} isHome />
      <Separator />

      {servers.map(item => (
        <ServerButton
          key={item.id}
          notification={item.notification}
          mentions={item.mentions}
        />
      ))}
    </Container>
  );
}
