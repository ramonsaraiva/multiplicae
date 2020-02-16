import styled from 'styled-components';

import { _smallText } from '../../styles/tools/Typography';

export const Info = styled.p`
  ${_smallText};
  display: inline-block;
  background-color: var(--color-complementary-green);
  color: var(--color-sencodary-lighter);
  border-radius: var(--radius-small);
  padding: var(--gap-half-smaller);
`;
