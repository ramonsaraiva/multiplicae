import styled from 'styled-components';
import { _caption, _h1 } from '../../styles/tools/Typography';

export const Icon = styled.img`
  margin-right: var(--gap-smaller);
`;

export const Strong = styled.strong`
  ${_h1};
  color: var(--color-complementary-blue);
  margin-right: calc(var(--gap-smaller) / 2);
`;

export const Content = styled.p`
  ${_caption};
  display: flex;
  align-items: center;
  color: var(--color-primary-blue-dark);
`;
