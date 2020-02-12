import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Title } from '../../components/TitleHack/styles';
import { Text } from '../../components/TextHack/styles';

const heightAction = '56px';

export const Action = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-secondary-light);
  text-transform: uppercase;
  color: var(--color-complementary-blue-light);
  text-decoration: none;
  width: 100%;
  height: ${heightAction};
  border-top: 1px solid var(--color-secondary);
`;

export const Card = styled.article`
  position: relative;
  overflow: hidden;
  background-color: var(--color-sencodary-lighter);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-medium);
  padding: var(--gap-small) var(--gap-small)
    ${({ contentAction }) =>
      contentAction ? heightAction : 'var(--gap-small)'};
  text-align: center;

  & > ${Title} {
    margin-bottom: var(--gap-smaller);
  }

  & > ${Text} {
    margin-bottom: var(--gap-medium);
  }
`;
