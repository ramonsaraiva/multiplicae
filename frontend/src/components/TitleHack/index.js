import React from 'react';

import { Title } from './styles';

function TitleHack({ as, children }) {
  return <Title as={as}>{children}</Title>;
}

export default TitleHack;
