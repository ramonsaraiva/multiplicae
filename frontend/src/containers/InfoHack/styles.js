import styled from 'styled-components';

import { Info as Label } from '../../components/InfoLabel/styles';

export const Info = styled.dl`
  position: relative;

  & > ${Label} {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
