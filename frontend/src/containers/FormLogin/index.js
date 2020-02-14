import React from 'react';

import { useHistory } from 'react-router-dom';

import FormAuth from '../FormAuth';
import TitleHack from '../../components/TitleHack';
import FieldHack from '../../components/FieldHack';
import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';
import ButtonHack from '../../components/ButtonHack';
import useValidation from '../../libs/validation/useValidation';
import validation from './validation';

function FormLogin() {
  const { value, handleChange, errors, handleSubmit } = useValidation(
    validation,
    sendUser,
    'email',
    'password'
  );

  const history = useHistory();

  function sendUser() {
    history.replace('/tree');
  }

  return (
    <FormAuth noValidate onSubmit={handleSubmit}>
      <TitleHack>Login</TitleHack>

      <FieldHack
        contentLabel="Email:"
        type="email"
        name="email"
        value={value.email}
        msgError={errors.email}
        onChange={handleChange}
      />

      <FieldHack
        contentLabel="Senha:"
        type="password"
        name="password"
        value={value.password}
        msgError={errors.password}
        onChange={handleChange}
      />

      <LabelHack>
        <InputHack type="checkbox" /> Lembre-me
      </LabelHack>

      <ButtonHack as="button">Entrar</ButtonHack>
    </FormAuth>
  );
}

export default FormLogin;
