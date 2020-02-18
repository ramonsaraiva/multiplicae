import styled from 'styled-components';

import { Form as FormHack } from '../FormHack/styles';
import { Input } from '../../components/InputHack/styles';
import { Title } from '../../components/TitleHack/styles';
import { Field } from '../../components/FieldHack/styles';
import { Caption } from '../../components/CaptionHack/styles';
import { Button } from '../../components/ButtonHack/styles';

export const Form = styled(FormHack)`
  & > ${Title} {
    margin-bottom: var(--gap-small);
  }

  & > ${Caption} {
    margin-bottom: var(--gap-big);
  }

  & > ${Field} {
    margin-bottom: var(--gap-small);
  }

  & ${Input} {
    margin-top: var(--gap-big);
  }

  & > ${Button} {
    flex-basis: 50px;
  }
`;
