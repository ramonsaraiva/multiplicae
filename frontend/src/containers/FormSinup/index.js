import React from 'react';

import FormAuth from '../FormAuth';
import TitleHack from '../../components/TitleHack';
import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';
import ButtonHack from '../../components/ButtonHack';
import FieldHack from '../../components/FieldHack';

function FormSignup() {
  return (
    <FormAuth>
      <TitleHack>Cadastro</TitleHack>

      <FieldHack contentLabel="Nome:" name="name" type="text" />
      <FieldHack contentLabel="Email:" name="email" type="email" />
      <FieldHack contentLabel="Senha:" name="password" type="password" />

      <LabelHack for="contract">
        <InputHack id="contract" type="checkbox" /> Li e aceito os termos de uso
      </LabelHack>

      <ButtonHack to="/tree">Enviar</ButtonHack>
    </FormAuth>
  );
}

export default FormSignup;
