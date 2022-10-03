import styled from 'styled-components';

export const InfoContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
`;

export const InfoBlock = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;

  > svg {
    color: darkred;
  }
`;

export const Label = styled.p`
  color: darkred;
`;
