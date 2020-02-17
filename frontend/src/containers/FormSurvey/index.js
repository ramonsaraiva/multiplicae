import React from 'react';

import useValidation from '../../libs/validation/useValidation';
import FieldHack from '../../components/FieldHack';

import validation from './validation';
import { Form } from './styles';

function FormSurvey() {
  const { value, handleChange, errors, handleSubmit } = useValidation(
    validation,
    sendForm,
    'dream'
  );

  function sendForm() {}

  return (
    <Form onSubmit={handleSubmit}>
      <FieldHack
        contentLabel="1. Qual é o seu maior sonho?"
        name="dream"
        value={value.dream}
        onChange={handleChange}
        msgError={errors.dream}
        type="text"
        placeholder="Ex.: uma casa, uma bicicleta..."
      />
    </Form>
  );
}

export default FormSurvey;
