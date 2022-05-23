import { ChannelButton } from '../ChannelButton';
import channels from './channels';
import { Container, Category, CategoryIcon } from './styles';

export function ChannelList(): JSX.Element {
  return (
    <Container>
      <Category>
        <span>CANAL DE TEXTO</span>
        <CategoryIcon />
      </Category>

      {channels.map(channel => (
        <ChannelButton
          key={channel.id}
          channelName={channel.channelName}
          selected={channel.selected}
        />
      ))}
    </Container>
  );
}
