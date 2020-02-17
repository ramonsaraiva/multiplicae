import React from 'react';

import FieldHack from '../../components/FieldHack';

import { Form } from './styles';

function FormSurvey() {
  return (
    <Form>
      <FieldHack
        contentLabel="1. Qual é o seu maior sonho?"
        name="dream"
        type="text"
        placeholder="Ex.: uma casa, uma bicicleta..."
      />
    </Form>
  );
}

export default FormSurvey;
