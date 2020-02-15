import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { _button } from '../../styles/tools/Typography';
import arrow from '../../icons/arrow-left.svg';

export const Action = styled(Link)`
  ${_button};
  display: block;
  color: var(--color-primary-blue);
  background: url(${arrow}) no-repeat center right;
  text-decoration: none;
  border-bottom: 1px solid var(--color-separation);
`;
