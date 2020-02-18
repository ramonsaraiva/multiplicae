import styled from 'styled-components';
import { Button } from '../../components/ButtonHack/styles';

export const Main = styled.main``;

export const Content = styled.div`
  display: flex;
  padding-top: var(--gap-bigger);
  padding-bottom: var(--gap-big);

  & ${Button} {
    background-color: var(--color-primary-blue);
  }

  @media (min-height: 720px) {
    align-items: center;
  }
`;
