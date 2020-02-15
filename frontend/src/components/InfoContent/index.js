import React from 'react';

import { Content, Icon, Strong } from './styles';

import moneyBall from '../../icons/money-ball.svg';

function InfoContent({ contentStrong, content }) {
  return (
    <Content>
      <Icon src={moneyBall} />
      <Strong>{contentStrong}</Strong>
      {content}
    </Content>
  );
}

export default InfoContent;
