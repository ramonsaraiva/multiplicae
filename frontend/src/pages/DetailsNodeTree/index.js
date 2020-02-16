import React from 'react';

import InfoHack from '../../containers/InfoHack';
import FooterHack from '../../containers/FooterHack';
import MainDetails from '../../containers/MainDetails';
import TitleHack from '../../components/TitleHack';
import HeaderHack from '../../containers/HeaderHack';
import TextHack from '../../components/TextHack';
import SlidersHack from '../../components/SlidersHack';
import ButtonHack from '../../components/ButtonHack';

function DetailsNodeTree() {
  const videos = [1, 2, 3];

  return (
    <MainDetails>
      <HeaderHack />
      <TitleHack>Lorem Ipsum</TitleHack>

      <TextHack>
        Somehow manage to catch a bird but have no idea what to do next, so play
        with it until it dies of shock inspect anything brought into the house,
        but scamper so i am the best hit you unexpectedly.
      </TextHack>

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

      <ButtonHack>Complete o desafio</ButtonHack>

      <FooterHack />
    </MainDetails>
  );
}

export default DetailsNodeTree;
