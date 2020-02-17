import styled from 'styled-components';

import { Form as FormHack } from '../FormHack/styles';
import { Input } from '../../components/InputHack/styles';

export const Form = styled(FormHack)`
  align-self: center;

  & ${Input} {
    margin-top: var(--gap-big);
  }
`;
