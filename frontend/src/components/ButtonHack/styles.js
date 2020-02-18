import styled from 'styled-components';

import { _button } from '../../styles/tools/Typography';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  ${_button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--color-complementary-blue-light);
  color: var(--color-secondary-light);
  text-decoration: none;
  border-radius: 5px;
`;
