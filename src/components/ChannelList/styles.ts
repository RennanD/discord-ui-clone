import { Plus } from 'phosphor-react';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;

  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const CategoryIcon = styled(Plus)`
  height: 18px;
  width: 18px;

  color: var(--symbol);
  cursor: pointer;
`;
