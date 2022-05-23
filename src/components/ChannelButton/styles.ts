import styled, { css } from 'styled-components';
import { Hash } from 'phosphor-react';
import { MdPersonAdd, MdSettings } from 'react-icons/md';

type ContainerProps = {
  selected: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;

  transition: all 0.2s ease;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    font-size: 15px;
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: var(--quinary);

      > div span {
        color: var(--white);
      }
    `}
`;

export const HashIcon = styled(Hash)`
  height: 20px;
  width: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(MdPersonAdd)`
  height: 18px;
  width: 18px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s ease;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  height: 18px;
  width: 18px;
  margin-left: 4px;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s ease;

  &:hover {
    color: var(--white);
  }
`;
