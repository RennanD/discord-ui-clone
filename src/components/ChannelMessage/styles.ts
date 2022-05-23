import styled, { css } from 'styled-components';

type ContainerProps = {
  hasMention: boolean;
};

type AvatarProps = {
  isBot: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  & + div {
    margin-top: 13px;
  }

  ${({ hasMention }) =>
    hasMention &&
    css`
      background-color: var(--mention-message);

      border-left: 2px solid var(--mention-detail);
      padding-left: 14px;
    `}
`;

export const Avatar = styled.div<AvatarProps>`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;

  background-color: var(--secondary);

  ${({ isBot }) =>
    isBot &&
    css`
      background-color: var(--mention-detail);
    `}
`;

export const Message = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 16px;
  }

  > span {
    margin-left: 6px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;

    font-weight: bold;
    font-size: 11px;
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;
