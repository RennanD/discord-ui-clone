import styled from 'styled-components';

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0px 16px;
  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;

  color: var(--gray);
`;
