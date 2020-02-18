import styled from 'styled-components';
import { Button } from '../../components/ButtonHack/styles';

export const Main = styled.main``;

export const Content = styled.div`
  display: flex;
  height: calc(100vh - var(--size-header));
  padding-top: var(--gap-bigger);

  @media (min-height: 720px) {
    align-items: center;
  }
`;
