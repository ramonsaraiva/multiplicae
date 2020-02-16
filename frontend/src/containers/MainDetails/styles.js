import styled from 'styled-components';

import { Header } from '../HeaderHack/styles';
import { Info } from '..//InfoHack/styles';
import { Title } from '../../components/TitleHack/styles';
import { Text } from '../../components/TextHack/styles';
import { Sliders } from '../../components/SlidersHack/styles';
import { Action } from '../../components/ActionArrow/styles';
import { Button } from '../../components/ButtonHack/styles';

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

  & > ${Info} {
    margin: 0 var(--gap-big) var(--gap-medium);
  }

  & > ${Button} {
    display: flex;
    height: 56px;
    margin: var(--gap-double-small) var(--gap-big) var(--gap-big);
  }
`;
