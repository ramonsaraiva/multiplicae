import styled from 'styled-components';

export const PrimaryArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SecondaryArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
  }
`;
