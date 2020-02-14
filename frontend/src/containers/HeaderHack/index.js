import React from 'react';

import LogoHack from '../../components/LogoHack';
import IconMenu from '../../components/MenuHack';

import { Header } from './styles';

function HeaderHack() {
  return (
    <Header>
      <LogoHack>Logo</LogoHack>

      <IconMenu />
    </Header>
  );
}

export default HeaderHack;
