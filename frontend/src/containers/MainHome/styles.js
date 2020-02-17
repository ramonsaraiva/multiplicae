import styled from 'styled-components';
import { Card } from '../CardHack/styles';

export const Main = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-complementary-blue);

  & > ${Card} {
    margin: 0 var(--gap-medium);
  }
`;
