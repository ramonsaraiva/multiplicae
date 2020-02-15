import React from 'react';

import TitleHack from '../../components/TitleHack';
import HeaderHack from '../../containers/HeaderHack';
import TextHack from '../../components/TextHack';
import SlidersHack from '../../components/SlidersHack';
import InfoHack from '../../components/InfoHack';
import InfoContent from '../../components/InfoContent';

function DetailsNodeTree() {
  const videos = [1, 2, 3];

  return (
    <>
      <HeaderHack />
      <TitleHack>Lorem Ipsum</TitleHack>

      <TextHack>
        Somehow manage to catch a bird but have no idea what to do next, so play
        with it until it dies of shock inspect anything brought into the house,
        but scamper so i am the best hit you unexpectedly.
      </TextHack>

      <SlidersHack videos={videos} />

      <InfoHack>Histórico de Rendimento</InfoHack>
      <InfoContent contentStrong="10,5%" content="a.a." />
    </>
  );
}

export default DetailsNodeTree;
