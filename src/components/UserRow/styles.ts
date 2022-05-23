import styled, { css } from 'styled-components';

type AvatarProps = {
  isBot: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;
  padding: 5px;

  cursor: pointer;

  border-radius: 4px;
  background-color: transparent;
  transition: all 0.2s ease;

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;

    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;

    font-weight: bold;
    font-size: 11px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Avatar = styled.div<AvatarProps>`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--primary);

  ${({ isBot }) =>
    isBot &&
    css`
      background-color: var(--mention-detail);
    `}
`;
