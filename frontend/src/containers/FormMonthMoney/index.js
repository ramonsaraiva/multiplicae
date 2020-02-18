import React from 'react';
import { useHistory } from 'react-router-dom';
import FormSurvey from '../FormSurvey';
import useValidation from '../../libs/validation/useValidation';
import validation from './validation';
import FieldHack from '../../components/FieldHack';
import ButtonHack from '../../components/ButtonHack';

function FormMonthMoney({ nextPage }) {
  const question = {
    contentLabel: '3. Quanto você consegue juntar por mês?',
    name: 'monthMoney',
    placeholder: 'Ex.: 100,00',
    type: 'number'
  };
  const { contentLabel, name, placeholder, type } = question;

  const { value, handleChange, errors, handleSubmit } = useValidation(
    validation,
    sendForm,
    'monthMoney'
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
        value={value.monthMoney}
        onChange={handleChange}
        msgError={errors.monthMoney}
        type={type}
        placeholder={placeholder}
      />

      <ButtonHack as="button">Avançar</ButtonHack>
    </FormSurvey>
  );
}

export default FormMonthMoney;
