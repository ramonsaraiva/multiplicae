import styled from 'styled-components';

import { Info as Title } from '../../components/InfoTitle/styles';
import { Info as Label } from '../../components/InfoLabel/styles';

export const Info = styled.dl`
  position: relative;

  & > ${Title} {
    margin-bottom: var(--gap-small);
  }

  & > ${Label} {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
