import styled from 'styled-components';
import { Title } from '../../components/TitleHack/styles';
import { Button } from '../../components/ButtonHack/styles';

export const Success = styled.main`
  padding: var(--gap-bigger) var(--gap-big) 0;
  text-align: center;

  & > ${Title} {
    margin-bottom: var(--gap-medium);
  }
  & > ${Button} {
    height: 50px;
    width: 100%;
  }
`;
