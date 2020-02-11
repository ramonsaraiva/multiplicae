import styled from 'styled-components';

import { _body1 } from '../../styles/tools/Typography';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  ${_body1};
  background-color: var(--color-primary-blue-dark);
  color: var(--color-secondary-light);
  text-decoration: none;
  border-radius: 5px;
`;
