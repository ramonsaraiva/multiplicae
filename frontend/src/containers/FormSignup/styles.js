import styled from 'styled-components';

import { Title } from '../../components/TitleHack/styles';
import { Input } from '../../components/InputHack/styles';
import { Button } from '../../components/ButtonHack/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > ${Title} {
    align-self: center;
    margin-bottom: var(--gap-big);
  }

  & > ${Input} {
    margin-bottom: var(--gap-medium);
    width: 100%;
    height: 40px;
  }

  & > ${Button} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-top: var(--gap-big);
  }
`;
