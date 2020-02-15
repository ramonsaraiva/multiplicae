import React from 'react';

import { Info, Action, Icon } from './styles';

import info from '../../icons/info.svg';

function InfoHack({ children }) {
  return (
    <Info>
      {children}
      <Action>
        <Icon src={info} />
      </Action>
    </Info>
  );
}

export default InfoHack;
