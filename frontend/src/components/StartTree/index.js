import React from 'react';

import { Start, Content,Ball,Border,Progress,Center } from './styles';

function StartTree(props) {
  return (
    <>
      <Ball>
        <Border />
        <Progress {...props} />
        <Center />
      </Ball>

      <Start {...props}>
        <Content>%</Content>
      </Start>
    </>
  );
}

export default StartTree;
