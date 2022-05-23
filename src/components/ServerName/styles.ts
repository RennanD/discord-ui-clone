import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 'SN';
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary);
  padding: 0 11px 0 16px;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2px;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: var(--white);
`;
