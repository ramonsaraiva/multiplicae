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
      return <InfoLabel>{contentInfoLabel}</InfoLabel>;
    }
  }

  return (
    <Info>
      <InfoTitle>{title}</InfoTitle>
      <InfoContent
        icon={icon}
        contentStrong={contentStrong}
        content={content}
      />
      {showInfoLabel()}
    </Info>
  );
}

export default InfoHack;
