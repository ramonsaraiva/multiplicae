import styled from 'styled-components';
import { Title } from '../../components/TitleHack/styles';

export const Icon = styled.img``;

export const Perfil = styled.main`
  text-align: center;
  padding: 0 var(--gap-big);

  & > ${Icon} {
    margin-bottom: var(--gap-big);
  }

  & > ${Title} {
    margin-bottom: var(--gap-smaller);
  }
`;
