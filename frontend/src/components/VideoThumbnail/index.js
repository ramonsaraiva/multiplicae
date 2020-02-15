import React from 'react';

import { Thumbnail, Image, Time, Play } from './styles';

import thumbnail from '../../img/thumbnail.png';

function VideoThumbnail() {
  return (
    <Thumbnail>
      <Play />
      <Image src={thumbnail} />
      <Time>01:00</Time>
    </Thumbnail>
  );
}

export default VideoThumbnail;
