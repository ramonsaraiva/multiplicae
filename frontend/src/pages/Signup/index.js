import React from 'react';

import MainOpen from '../../containers/MainOpen';
import TitleHack from '../../components/TitleHack';
import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';

function Signup() {
  return (
    <MainOpen>
      <TitleHack>Cadastro</TitleHack>

      <LabelHack>Nome</LabelHack>
      <InputHack name="name" type="text" />
    </MainOpen>
  );
}

export default Signup;
