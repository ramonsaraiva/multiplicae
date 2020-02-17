import styled from 'styled-components';

import { Form as FormHack } from '../FormHack/styles';
import { Label } from '../../components/LabelHack/styles';
import { Input } from '../../components/InputHack/styles';

export const Form = styled(FormHack)`
  flex-direction: column;
  position: absolute;
  width: calc(100vw * ${({ qtdQuestions }) => qtdQuestions});
  transform: calc(92vw * ${({ fieldActive }) => fieldActive});
  transition: 200ms transform linear;

  & > ${Label} {
    width: calc(100vw - var(--gap-big) * 2);
    margin-right: var(--gap-big);
  }

  & > ${Label}:not(:last-child) {
    margin-right: var(--gap-big);
  }

  & ${Input} {
    margin-top: var(--gap-big);
  }
`;
