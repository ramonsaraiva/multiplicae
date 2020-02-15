import React, { useState } from 'react';

import { Sliders, Content, Item } from './styles';
import VideoThumbnail from '../VideoThumbnail';

function SlidersHack({ videos }) {
  const [idActive, setIdActive] = useState(0);

  function handleClick({ target }) {
    const id = parseInt(target.closest('li').getAttribute('data-id'));

    setIdActive(id);
  }

  function changePosition(key) {
    if (key === idActive + 1) return 'right';
    if (idActive !== 0 && key === idActive - 1) return 'left';
  }

  return (
    <Sliders>
      <Content qtdVideos={videos.length} idActive={idActive}>
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
      </Content>
    </Sliders>
  );
}

export default SlidersHack;
