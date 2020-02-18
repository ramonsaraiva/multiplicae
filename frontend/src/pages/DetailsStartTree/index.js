import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import MainDetails from '../../containers/MainDetails';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';
import SlidersHack from '../../components/SlidersHack';
import ActionArrow from '../../components/ActionArrow';

function DetailsStartTree(props) {
  const videos = [1, 2, 3, 4];

  const data = {
    abc: {
      title: 'SELIC',
      introduction: 'Uma introducaozinha'
    }
  }

  return (
    <MainDetails>
      <HeaderHack />

      <TitleHack>O que são</TitleHack>
      <TextHack>
        Somehow manage to catch a bird but have no idea what to do next, so play
        with it until it dies of shock inspect anything brought into the house,
        but scamper so i am the best hit you unexpectedly.
      </TextHack>

      <SlidersHack videos={videos} />

      <TitleHack as="h2">Tipos de indicadores</TitleHack>

      <ActionArrow>Selic</ActionArrow>
      <ActionArrow>CDB</ActionArrow>
      <ActionArrow>CDI</ActionArrow>
      <ActionArrow>IPCA</ActionArrow>
    </MainDetails>
  );
}

export default DetailsStartTree;
