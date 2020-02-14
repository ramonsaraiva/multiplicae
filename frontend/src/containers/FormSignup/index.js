import React from 'react';

import useValidation from '../../libs/validation/useValidation';
import validation from './validation';
import FormAuth from '../FormAuth';
import TitleHack from '../../components/TitleHack';
import LabelHack from '../../components/LabelHack';
import InputHack from '../../components/InputHack';
import ButtonHack from '../../components/ButtonHack';
import FieldHack from '../../components/FieldHack';

function FormSignup() {
  const { errors, value, handleSubmit, handleChange } = useValidation(
    validation,
    newUser,
    'name',
    'email',
    'password',
    'termsOfUse'
  );

  function newUser() {}

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
        contentLabel="Leia os termos de uso"
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
