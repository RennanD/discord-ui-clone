import { useEffect, useRef } from 'react';
import { ChannelMessage } from '../ChannelMessage';
import messages from './messages';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

export function ChannelData(): JSX.Element {
  const messagesRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {messages.map(message => (
          <ChannelMessage
            author={message.author}
            content={message.content}
            date={message.date}
            hasMention={message.hasMention}
            isBot={message.isBot}
          />
        ))}
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}
