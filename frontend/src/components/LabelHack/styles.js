import styled, { css } from 'styled-components';

import { _h1, _body1 } from '../../styles/tools/Typography';
import { Checkbox } from '../../components/CheckboxHack/styles';

const whenCheckbox = css`
  ${_body1};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: var(--color-secondary-light);
  height: var(--size-input);
  border-radius: var(--radius-small);
  border: 1px solid var(--color-secondary);
  padding: 0 var(--gap-medium);
`;

export const Label = styled.label`
  ${_h1};
  color: var(--color-primary-blue-dark);

  ${({ type }) => type === 'checkbox' && whenCheckbox}
`;
