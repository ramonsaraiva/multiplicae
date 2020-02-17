import styled from 'styled-components';

import { Title } from '../../components/TitleHack/styles';
import { Input } from '../../components/InputHack/styles';
import { Button } from '../../components/ButtonHack/styles';
import { Label } from '../../components/LabelHack/styles';

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-left: var(--gap-big);
  padding-right: var(--gap-big);

  & > ${Title} {
    align-self: center;
    margin-bottom: var(--gap-big);
  }

  & > ${Label} {
    margin-bottom: var(--gap-big);
    width: 100%;
    text-align: left;
  }

  & ${Input} {
    display: block;
    width: inherit;
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
