import React from 'react';
import { Container, Avatar, Message, Header, Content } from './styles';

export type ChannelMessageProps = {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
};

export function ChannelMessage({
  author,
  content,
  date,
  hasMention = false,
  isBot = false,
}: ChannelMessageProps): JSX.Element {
  return (
    <Container hasMention={hasMention}>
      <Avatar isBot={isBot} />
      <Message>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>bot</span>}
          <time>{date}</time>
        </Header>

        <Content>{content}</Content>
      </Message>
    </Container>
  );
}
