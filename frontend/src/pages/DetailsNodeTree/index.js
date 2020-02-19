import React from 'react';

import InfoHack from '../../containers/InfoHack';
import FooterHack from '../../containers/FooterHack';
import MainDetails from '../../containers/MainDetails';
import TitleHack from '../../components/TitleHack';
import HeaderHack from '../../containers/HeaderHack';
import TextHack from '../../components/TextHack';
import SlidersHack from '../../components/SlidersHack';

function DetailsNodeTree() {
  const videos = [1, 2, 3];

  return (
    <MainDetails>
      <HeaderHack />
      <TitleHack>fjaskfhqwj</TitleHack>

      <TextHack>asfhkjwqhf</TextHack>

      <SlidersHack videos={videos} />

      <InfoHack
        title="Histórico de Rendimento"
        icon="moneyBall"
        contentStrong="10,5%"
        content="a.a."
        contentInfoLabel="5% acima da poupança"
      />

      <InfoHack
        title="Segurança"
        icon="shield"
        contentStrong="Médio Risco"
        content="a.a."
      />

      <InfoHack
        title="Tempo de Resgate"
        icon="sandClock"
        contentStrong="2 dias úteis"
        content="a.a."
      />

      <FooterHack />
    </MainDetails>
  );
}

export default DetailsNodeTree;
