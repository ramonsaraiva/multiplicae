import React from 'react';

import MainOpen from '../../containers/MainOpen';
import FormAuth from '../../containers/FormAuth';
import TitleHack from '../../components/TitleHack';
import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';
import ButtonHack from '../../components/ButtonHack';

function Signup() {
  return (
    <MainOpen>
      <FormAuth>
        <TitleHack>Cadastro</TitleHack>

        <LabelHack for="name">Nome:</LabelHack>
        <InputHack id="name" name="name" type="text" />

        <LabelHack for="email">Email:</LabelHack>
        <InputHack id="email" name="email" type="email" />

        <LabelHack for="password">Senha:</LabelHack>
        <InputHack id="password" name="password" type="password" />

        <LabelHack for="contract">
          <InputHack id="contract" type="checkbox" /> Li e aceito os termos de
          uso
        </LabelHack>

        <ButtonHack to="/tree">Enviar</ButtonHack>
      </FormAuth>
    </MainOpen>
  );
}

export default Signup;
