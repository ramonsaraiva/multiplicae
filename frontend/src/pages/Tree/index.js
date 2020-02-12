import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import TitleHack from '../../components/TitleHack';
import LogoHack from '../../components/LogoHack';
import IconMenu from '../../components/MenuHack';

function Tree() {
  return (
    <>
      <HeaderHack>
        <LogoHack>Logo</LogoHack>

        <IconMenu />
      </HeaderHack>

      <TitleHack>Invista nos seus sonhos</TitleHack>
    </>
  );
}

export default Tree;
