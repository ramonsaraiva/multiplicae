import styled from 'styled-components';

import { Title } from '../../components/TitleHack/styles';
import { Button } from '../../components/ButtonHack/styles';

export const Content = styled.div`
  text-align: center;
  width: 100%;

  & > ${Title} {
    margin-bottom: var(--gap-bigger);
  }

  & > ${Button} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 50px;
    margin-bottom: var(--gap-medium);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
