import styled from 'styled-components';

export const DiffWrapper = styled.div`
  padding: 10px;
`;

export const DiffTitle = styled.h3`
  color: darkred;
  margin-bottom: 8px;
`;

export const DiffList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const DiffItem = styled.li`
  color: darkred;
  padding: 8px 24px;
  border: 1px solid darkred;
  border-radius: 12px;

  background-color: ${p => (p.selected ? 'darkred' : 'transparent')};

  color: ${p => (p.selected ? 'white' : 'darkred')};
`;
