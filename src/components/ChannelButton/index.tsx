import { Container, HashIcon, InviteIcon, SettingsIcon } from './styles';

type ChannelButtonProps = {
  channelName: string;
  selected?: boolean;
};

export function ChannelButton({
  channelName,
  selected = false,
}: ChannelButtonProps): JSX.Element {
  return (
    <Container selected={selected}>
      <div>
        <HashIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}
