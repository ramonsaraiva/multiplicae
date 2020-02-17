import styled from 'styled-components';

import { _placeholder } from '../../styles/tools/Typography';

export const Input = styled.input`
  ${_placeholder};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--color-secondary-light);
  height: 56px;
  border-bottom: 2px solid var(--color-secondary);
  border-radius: var(--radius-small) var(--radius-small) 0 0;
  padding: 0 var(--gap-small);
`;
