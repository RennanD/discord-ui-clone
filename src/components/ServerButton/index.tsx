import { House } from 'phosphor-react';
import { Container } from './styles';

export type ServerButtonProps = {
  isHome?: boolean;
  selected?: boolean;
  notification: boolean;
  mentions: number;
};

export function ServerButton({
  mentions,
  isHome = false,
  selected = false,
  notification,
}: ServerButtonProps): JSX.Element {
  return (
    <Container
      isHome={isHome}
      selected={selected}
      mentions={mentions}
      notification={notification}
    >
      {isHome && <House size={22} weight="bold" color="#fff" />}
    </Container>
  );
}
