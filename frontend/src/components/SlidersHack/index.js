import React, { useState } from 'react';

import { Wrapper, Sliders, Item } from './styles';
import VideoThumbnail from '../VideoThumbnail';

function SlidersHack({ videos }) {
  const [idActive, setIdActive] = useState(1);

  function handleClick({ target }) {
    const id = parseInt(target.closest('li').getAttribute('data-id'));

    setIdActive(id);
  }

  function changePosition(key) {
    if (key === idActive + 1) return 'right';
    if (idActive !== 0 && key === idActive - 1) return 'left';
  }

  return (
    <Wrapper>
      <Sliders qtdVideos={videos.length} idActive={idActive}>
        {videos.map(({ thumbnail }, key) => (
          <Item
            position={changePosition(key)}
            data-id={key}
            key={`${thumbnail}${key}`}
            onClick={handleClick}
          >
            <VideoThumbnail thumbnail={thumbnail} />
          </Item>
        ))}
      </Sliders>
    </Wrapper>
  );
}

export default SlidersHack;
