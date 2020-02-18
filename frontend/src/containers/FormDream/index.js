import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../FormSurvey/styles';
import useValidation from '../../libs/validation/useValidation';
import validation from './vallidation';
import FieldHack from '../../components/FieldHack';
import ButtonHack from '../../components/ButtonHack';

function FormDream({ nextPage }) {
  const question = {
    contentLabel: '1. Qual é o seu maior sonho?',
    name: 'dream',
    placeholder: 'Ex.: uma casa, um carro...',
    type: 'text'
  };
  const { contentLabel, name, placeholder, type } = question;

  const { value, handleChange, errors, handleSubmit } = useValidation(
    validation,
    sendForm,
    'dream'
  );

  const history = useHistory();

  function sendForm() {
    history.push(nextPage);
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FieldHack
        contentLabel={contentLabel}
        name={name}
        value={value.dream}
        onChange={handleChange}
        msgError={errors.dream}
        type={type}
        placeholder={placeholder}
      />

      <ButtonHack as="button">Avançar</ButtonHack>
    </Form>
  );
}

export default FormDream;
