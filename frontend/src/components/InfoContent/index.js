import React from 'react';

import { Content, Icon, Strong } from './styles';

import moneyBall from '../../icons/money-ball.svg';
import shield from '../../icons/shield.svg';
import sandClock from '../../icons/sand-clock.svg';

function InfoContent({ icon, contentStrong, content }) {
  const icons = { moneyBall, shield, sandClock };

  return (
    <Content>
      <Icon src={icons[icon]} />
      <Strong>{contentStrong}</Strong>
      {content}
    </Content>
  );
}

export default InfoContent;
