import React from 'react';
import { useHistory } from 'react-router-dom';
import FormSurvey from '../FormSurvey';
import useValidation from '../../libs/validation/useValidation';
import validation from './validation';
import FieldHack from '../../components/FieldHack';
import ButtonHack from '../../components/ButtonHack';

function FormDreamMoney({ nextPage }) {
  const question = {
    contentLabel: '2. Qual o valor aproximado desse sonho?',
    name: 'dreamMoney',
    placeholder: 'Ex.: 4.000,00',
    type: 'number'
  };
  const { contentLabel, name, placeholder, type } = question;

  const { value, handleChange, errors, handleSubmit } = useValidation(
    validation,
    sendForm,
    'dreamMoney'
  );

  const history = useHistory();

  function sendForm() {
    history.push(nextPage);
  }

  return (
    <FormSurvey noValidate onSubmit={handleSubmit}>
      <FieldHack
        contentLabel={contentLabel}
        name={name}
        value={value.dreamMoney}
        onChange={handleChange}
        msgError={errors.dreamMoney}
        type={type}
        placeholder={placeholder}
      />

      <ButtonHack as="button">Avançar</ButtonHack>
    </FormSurvey>
  );
}

export default FormDreamMoney;
