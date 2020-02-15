import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';
import SlidersHack from '../../components/SlidersHack';

function DetailsStartTree() {
  const videos = [1, 2, 3, 4];

  return (
    <>
      <HeaderHack />
      <TitleHack>O que são</TitleHack>
      <TextHack>
        Somehow manage to catch a bird but have no idea what to do next, so play
        with it until it dies of shock inspect anything brought into the house,
        but scamper so i am the best hit you unexpectedly.
      </TextHack>

      <SlidersHack videos={videos} />
    </>
  );
}

export default DetailsStartTree;
