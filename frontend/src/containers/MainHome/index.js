import React from 'react';

import { Main, Content } from './styles';

function MainHome({ children }) {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
}

export default MainHome;
