import React from 'react';

import { Main, Content } from './styles';

function MainOpen({ children }) {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
}

export default MainOpen;
