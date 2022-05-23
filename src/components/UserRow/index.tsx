import { Container, Avatar } from './styles';

type UserRowProps = {
  nickname: string;
  isBot?: boolean;
};

export function UserRow({
  nickname,
  isBot = false,
}: UserRowProps): JSX.Element {
  return (
    <Container>
      <Avatar isBot={isBot} />

      <strong>{nickname}</strong>

      {isBot && <span>BOT</span>}
    </Container>
  );
}
