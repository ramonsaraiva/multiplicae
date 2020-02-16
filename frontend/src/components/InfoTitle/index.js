import React from 'react';

import { Info, Action, Icon } from './styles';

import info from '../../icons/info.svg';

function InfoTitle({ as, children }) {
  return (
    <Info as={as}>
      {children}
      <Action>
        <Icon src={info} />
      </Action>
    </Info>
  );
}

export default InfoTitle;
