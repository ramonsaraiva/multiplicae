import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import ContentHeader from '../../containers/ContentHeader';
import CardHack from '../../containers/CardHack';
import TitleHack from '../../components/TitleHack';
import LogoHack from '../../components/LogoHack';
import IconMenu from '../../components/MenuHack';
import TextHack from '../../components/TextHack';

function Tree() {
  return (
    <>
      <HeaderHack>
        <LogoHack>Logo</LogoHack>

        <IconMenu />
      </HeaderHack>

      <ContentHeader>
        <CardHack contentAction="Monte a sua jornada">
          <TitleHack>Invista nos seus sonhos</TitleHack>

          <TextHack>
            Entenda sobre investimentos a partir do básico e perca o medo de
            investir!
          </TextHack>
        </CardHack>
      </ContentHeader>
    </>
  );
}

export default Tree;
