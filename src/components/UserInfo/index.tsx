import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadPhoneIcon,
  SettingsIcon,
} from './styles';

export function UserInfo(): JSX.Element {
  return (
    <Container>
      <Profile>
        <Avatar />

        <UserData>
          <strong>Rennan Oliveira</strong>
          <span>#RennanOliveira</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}
