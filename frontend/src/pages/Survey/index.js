import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import TitleHack from '../../components/TitleHack';
import FieldHack from '../../components/FieldHack';

function Survey() {
  return (
    <>
      <HeaderHack />
      <FieldHack
        contentLabel="1. Qual é o seu maior sonho?"
        name="dream"
        type="text"
        placeholder="Ex.: uma casa, uma bicicleta..."
      />
    </>
  );
}

export default Survey;
