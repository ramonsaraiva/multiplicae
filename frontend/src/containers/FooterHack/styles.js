import styled from 'styled-components';

import { _caption } from '../../styles/tools/Typography';

export const Text = styled.p`
  ${_caption};
  color: var(--color-secondary);
`;

export const Footer = styled.footer`
  box-sizing: border-box;
  background-color: var(--color-primary-blue);
  height: 80px;
  padding: var(--gap-medium) var(--gap-medium) 0;
`;
