import React from 'react';

import { Figure, Thumbnail, Time, Play } from './styles';

import thumbnail from '../../img/thumbnail.png';

function VideoThumbnail() {
  return (
    <Figure>
      <Play />
      <Thumbnail src={thumbnail} />
      <Time>01:00</Time>
    </Figure>
  );
}

export default VideoThumbnail;
