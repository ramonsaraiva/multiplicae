import React from 'react';
import { useHistory } from 'react-router-dom';

import useValidation from '../../libs/validation/useValidation';
import FieldHack from '../../components/FieldHack';
import ButtonHack from '../../components/ButtonHack';
import TitleHack from '../../components/TitleHack';
import CaptionHack from '../../components/CaptionHack';

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
      name: 'dreamMoney',
      placeholder: 'Ex.: 4.000,00',
      type: 'number'
    },
    {
      contentLabel: '3. Quanto você consegue juntar por mês?',
      name: 'monthMoney',
      placeholder: 'Ex.: 100,00',
      type: 'number'
    },
    {
      title: '4. Você já possui algum dinheiro investido? Onde?',
      caption: 'Você pode marcar mais de uma opção.',
      fields: [
        {
          contentLabel: 'Não possuo',
          name: 'notHave',
          type: 'checkbox'
        }
      ]
    }
  ];

  const { contentLabel, name, type, placeholder } =
    question < 3 && questions[question];
  const { value, handleChange, errors, handleSubmit } = useValidation(
    validation[name],
    sendForm,
    'dream'
  );

  const history = useHistory();

  function sendForm() {
    history.push(`/survey/${parseInt(question) + 1}`);
  }

  function simpleForm() {
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <FieldHack
          contentLabel={contentLabel}
          name={name}
          value={value[name]}
          onChange={handleChange}
          msgError={errors[name]}
          type={type}
          placeholder={placeholder}
        />

        <ButtonHack as="button">Avançar</ButtonHack>
      </Form>
    );
  }

  function multipleCheckboxForm() {
    const { title, caption, fields } = questions[question];
    const { contentLabel, name, type } = fields[0];

    return (
      <Form>
        <TitleHack>{title}</TitleHack>
        <CaptionHack>{caption}</CaptionHack>

        <FieldHack name={name} contentLabel={contentLabel} type={type} />
      </Form>
    );
  }

  function whatForm() {
    if (Array.isArray(questions[question].fields)) {
      return multipleCheckboxForm();
    } else {
      return simpleForm();
    }
  }

  return whatForm();
}

export default FormSurvey;
