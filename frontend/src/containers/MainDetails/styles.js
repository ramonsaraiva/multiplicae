import styled from 'styled-components';

import { Header } from '../HeaderHack/styles';
import { Title } from '../../components/TitleHack/styles';
import { Text } from '../../components/TextHack/styles';
import { Sliders } from '../../components/SlidersHack/styles';
import { Action } from '../../components/ActionArrow/styles';

export const Main = styled.main`
  & > ${Header} {
    margin-bottom: var(--gap-double-small);
  }

  & > ${Title} {
    padding: 0 var(--gap-big);
    margin-bottom: var(--gap-smaller);
  }

  & > ${Text} {
    padding: 0 var(--gap-big);
    margin-bottom: var(--gap-double-small);
  }

  & > ${Sliders} {
    margin-bottom: var(--gap-double-small);
  }

  & > ${Action} {
    margin: 0 var(--gap-big);
    padding: var(--gap-smaller) 0;
  }
`;
