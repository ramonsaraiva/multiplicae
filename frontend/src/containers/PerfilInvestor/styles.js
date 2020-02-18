import styled from 'styled-components';
import { Title } from '../../components/TitleHack/styles';
import { Button } from '../../components/ButtonHack/styles';
import { Text } from '../../components/TextHack/styles';

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

  & > ${Text} {
    margin-bottom: var(--gap-big);
  }

  & > ${Button} {
    width: 100%;
    height: 50px;
  }
`;
