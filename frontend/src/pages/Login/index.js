import React from 'react';

import MainOpen from '../../containers/MainOpen';
import FormAuth from '../../containers/FormAuth';
import TitleHack from '../../components/TitleHack';
import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';
import ButtonHack from '../../components/ButtonHack';

function Login() {
  return (
    <MainOpen>
      <FormAuth>
        <TitleHack>Login</TitleHack>

        <LabelHack for="email">Email:</LabelHack>
        <InputHack id="email" type="email" />

        <LabelHack for="password">Senha:</LabelHack>
        <InputHack id="password" type="password" />

        <LabelHack>
          <InputHack type="checkbox" /> Lembre-me
        </LabelHack>

        <ButtonHack to="/tree">Entrar</ButtonHack>
      </FormAuth>
    </MainOpen>
  );
}

export default Login;
