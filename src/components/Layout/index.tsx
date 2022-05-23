import { ChannelInfo } from '../ChannelInfo';
import { ChannelList } from '../ChannelList';
import { ServerLitst } from '../ServerLitst';
import { ServerName } from '../ServerName';
import { UserInfo } from '../UserInfo';
import { UserList } from '../UserList';
import { Grid } from './styles';

export function Layout(): JSX.Element {
  return (
    <Grid>
      <ServerLitst />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <UserList />
    </Grid>
  );
}
