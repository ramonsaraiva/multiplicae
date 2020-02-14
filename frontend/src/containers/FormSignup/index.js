import React from 'react';

import useValidation from '../../libs/validation/useValidation';
import validation from './validation';
import FormAuth from '../FormAuth';
import TitleHack from '../../components/TitleHack';
import ButtonHack from '../../components/ButtonHack';
import FieldHack from '../../components/FieldHack';
import { useHistory } from 'react-router-dom';

function FormSignup() {
  const { errors, value, handleSubmit, handleChange } = useValidation(
    validation,
    newUser,
    'name',
    'email',
    'password',
    'termsOfUse'
  );

  const history = useHistory();

  function newUser() {
    history.push('/tree');
  }

  return (
    <FormAuth noValidate onSubmit={handleSubmit}>
      <TitleHack>Cadastro</TitleHack>

      <FieldHack
        contentLabel="Nome:"
        name="name"
        type="text"
        value={value.name}
        msgError={errors.name}
        onChange={handleChange}
      />
      <FieldHack
        contentLabel="Email:"
        name="email"
        type="email"
        value={value.email}
        msgError={errors.email}
        onChange={handleChange}
      />
      <FieldHack
        contentLabel="Senha:"
        name="password"
        type="password"
        value={value.password}
        msgError={errors.password}
        onChange={handleChange}
      />
      <FieldHack
        contentLabel="Li e aceito os termos de uso"
        name="termsOfUse"
        type="checkbox"
        value={value.termsOfUse}
        msgError={errors.termsOfUse}
        onChange={handleChange}
      />

      <ButtonHack as="button">Enviar</ButtonHack>
    </FormAuth>
  );
}

export default FormSignup;
