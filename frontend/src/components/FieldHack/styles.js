import styled from 'styled-components';

import { _smallText } from '../../styles/tools/Typography';
import { Checkbox } from '../CheckboxHack/styles';
import { Label } from '../LabelHack/styles';

import check from '../../icons/check.svg';

export const Error = styled.span`
  ${_smallText};
  position: absolute;
  color: var(--color-complementary-red);
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > ${Checkbox} {
    display: none;
  }

  & > ${Label} {
    cursor: pointer;
    width: 100%;
  }

  & > ${Label}::before {
    content: '';
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: 1px solid var(--color-checkbox);
    border-radius: var(--radius-medium);
    margin-right: var(--gap-small);
  }

  & > ${Checkbox}:checked + ${Label} {
    background-color: var(--color-complementary-blue-light);
    color: var(--color-sencodary-lighter);
  }

  & > ${Checkbox}:checked + ${Label}::before {
    background: url(${check}) var(--color-sencodary-lighter) no-repeat center;
    border: 2px solid var(--color-complementary-blue-light);
    --moz-outline: 2px solid var(--color-sencodary-lighter);
    -moz-outline-radius: var(--radius-medium);
    -webkit-border-radius: var(--radius-medium);
  }
`;
