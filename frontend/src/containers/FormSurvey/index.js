import React from 'react';
import { useHistory } from 'react-router-dom';

import useValidation from '../../libs/validation/useValidation';
import FieldHack from '../../components/FieldHack';
import ButtonHack from '../../components/ButtonHack';

import validation from './validation';
import { Form } from './styles';

function FormSurvey({ question }) {
  const questions = [
    {
      contentLabel: '1. Qual é o seu maior sonho?',
      name: 'dream',
      placeholder: 'Ex.: uma casa, um carro...',
      type: 'text'
    },
    {
      contentLabel: '2. Qual o valor aproximado desse sonho?',
      name: 'moneyDream',
      placeholder: 'Ex.: 4.000,00',
      type: 'number'
    },
    {
      contentLabel: '3. Quanto você consegue juntar por mês?',
      name: 'moneyMoth',
      placeholder: 'Ex.: 100,00',
      type: 'number'
    }
  ];

  const { value, handleChange, errors, handleSubmit } = useValidation(
    validation,
    sendForm,
    'dream'
  );

  const { contentLabel, name, text, placeholder } = questions[question];

  const history = useHistory();

  function sendForm() {
    history.replace(`/survey/${parseInt(question) + 1}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FieldHack
        contentLabel={contentLabel}
        name={name}
        value={value[name]}
        onChange={handleChange}
        msgError={errors[name]}
        type={text}
        placeholder={placeholder}
      />

      <ButtonHack as="button">Avançar</ButtonHack>
    </Form>
  );
}

export default FormSurvey;
