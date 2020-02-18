import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import MainDetails from '../../containers/MainDetails';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';
import SlidersHack from '../../components/SlidersHack';
import ActionArrow from '../../components/ActionArrow';

function DetailsStartTree(props) {
  const videos = [1, 2, 3, 4];

  const other_indexes = props.data.content.other_indexes.map(
    (index) => <ActionArrow key={index.name} to='/node/11'>{index.name}</ActionArrow>);

  return (
    <MainDetails>
      <HeaderHack />

      <TitleHack>{props.data.content.title}</TitleHack>
      <TextHack>{props.data.content.description}</TextHack>

      <SlidersHack videos={videos} />

      <TitleHack as="h2">Veja outros indicadores</TitleHack>

      {other_indexes}
    </MainDetails>
  );
}

export default DetailsStartTree;
