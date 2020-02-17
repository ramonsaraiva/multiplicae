import styled from 'styled-components';

import { _placeholder } from '../../styles/tools/Typography';

export const Input = styled.input`
  ${_placeholder};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--color-secondary-light);
  height: var(--size-input);
  border-bottom: 2px solid;
  border-radius: var(--radius-small) var(--radius-small) 0 0;
  padding: 0 var(--gap-small);

  border-bottom-color: ${({ error }) =>
    error ? 'var(--color-complementary-red-light)' : 'var(--color-secondary)'};

  &:focus,
  &:hover {
    border-bottom-color: ${({ error }) =>
      error
        ? 'var(--color-complementary-red-light)'
        : 'var(--color-complementary-blue)'};
  }
`;
