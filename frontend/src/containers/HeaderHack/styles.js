import styled from 'styled-components';
import { Logo } from '../../components/LogoHack/styles';

export const Header = styled.header`
  background-color: var(--color-complementary-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--gap-small) var(--gap-big);

  & > ${Logo} {
    line-height: 1em;
  }
`;
