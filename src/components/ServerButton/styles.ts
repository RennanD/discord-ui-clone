import styled, { css } from 'styled-components';

import { ServerButtonProps } from '.';

export const Container = styled.button<ServerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;
  background-color: var(--primary);
  cursor: pointer;
  position: relative;

  transition: all 0.2s ease;

  ${({ isHome }) =>
    isHome &&
    css`
      background-color: var(--rocketseat);
    `}

  ${({ selected }) =>
    selected &&
    css`
      border-radius: 16px;
    `}

  &:hover {
    border-radius: 16px;

    ${({ isHome }) =>
      !isHome &&
      css`
        background-color: var(--discord);
      `}
  }

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;
    display: ${({ notification }) => (notification ? 'inline' : 'none')};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${({ mentions }) => mentions || ''}';
    display: ${({ mentions }) => (mentions ? 'inline' : 'none')};
  }
`;
