import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import ContentHeader from '../../containers/ContentHeader';
import CardHack from '../../containers/CardHack';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';
import TreeArea from '../../components/TreeArea';

function Tree() {
  return (
    <>
      <HeaderHack />

      <ContentHeader>
        <CardHack contentAction="Monte a sua jornada">
          <TitleHack>Invista nos seus sonhos</TitleHack>

          <TextHack>
            Entenda sobre investimentos a partir do básico e perca o medo de
            investir!
          </TextHack>
        </CardHack>
      </ContentHeader>

      <TitleHack>Índices</TitleHack>
      <TreeArea />
    </>
  );
}

export default Tree;
