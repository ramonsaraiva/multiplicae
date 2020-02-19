import React, { useState, useEffect } from 'react';

import retrieve_trail_content from '../../services/trail.service'
import HeaderHack from '../../containers/HeaderHack';
import ContentHeader from '../../containers/ContentHeader';
import CardHack from '../../containers/CardHack';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';
import TreeArea from '../../components/TreeArea';

function Tree() {

  const [data, setData] = useState();
  useEffect(async () => {
    const content = await retrieve_trail_content('default');
    setData(content);
  }, []);

  return (
    <>
      <HeaderHack />

      <ContentHeader>
        <CardHack contentAction="Monte a sua jornada" hrefAction='/'>
          <TitleHack>Invista nos seus sonhos</TitleHack>

          <TextHack>
            Entenda sobre investimentos a partir do básico e perca o medo de
            investir!
          </TextHack>
        </CardHack>
      </ContentHeader>
      <TreeArea node={data.root} />
    </>
  );
}

export default Tree;
