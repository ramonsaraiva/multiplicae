import React from 'react';

import { Header } from './styles';

function HeaderHack({ children }) {
  return <Header>{children}</Header>;
}

export default HeaderHack;
