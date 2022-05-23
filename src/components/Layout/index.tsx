import { ChannelInfo } from '../ChannelInfo';
import { ServerLitst } from '../ServerLitst';
import { ServerName } from '../ServerName';
import { Grid } from './styles';

export function Layout(): JSX.Element {
  return (
    <Grid>
      <ServerLitst />
      <ServerName />
      <ChannelInfo />
    </Grid>
  );
}
