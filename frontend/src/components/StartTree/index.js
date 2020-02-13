import React from 'react';

import { Start, Content } from './styles';

function StartTree(props) {
  return (
    <Start {...props}>
      <Content>%</Content>
    </Start>
  );
}

export default StartTree;
