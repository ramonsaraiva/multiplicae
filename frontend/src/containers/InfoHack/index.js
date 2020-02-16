import React from 'react';

import InfoTitle from '../../components/InfoTitle';
import InfoContent from '../../components/InfoContent';
import InfoLabel from '../../components/InfoLabel';

import { Info } from './styles';

function InfoHack({
  title,
  icon,
  contentStrong,
  content,
  contentInfoLabel = false
}) {
  function showInfoLabel() {
    if (contentInfoLabel) {
      return <InfoLabel as="dd">{contentInfoLabel}</InfoLabel>;
    }
  }

  return (
    <Info>
      <InfoTitle as="dt">{title}</InfoTitle>
      <InfoContent
        as="dd"
        icon={icon}
        contentStrong={contentStrong}
        content={content}
      />
      {showInfoLabel()}
    </Info>
  );
}

export default InfoHack;
