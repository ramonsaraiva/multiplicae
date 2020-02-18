import React from 'react';
import { Form } from '../FormSurvey/styles';
import TitleHack from '../../components/TitleHack';
import FieldHack from '../../components/FieldHack';
import ButtonHack from '../../components/ButtonHack';
import useValidation from '../../libs/validation/useValidation';
import CaptionHack from '../../components/CaptionHack';
import { useHistory } from 'react-router-dom';

function FormDoYouInvest({ nextPage }) {
  const question = {
    title: '4. Você já possui algum dinheiro investido? Onde?',
    caption: 'Você pode marcar mais de uma opção.',
    fields: [
      {
        contentLabel: 'Não possuo',
        name: 'notHave',
        type: 'checkbox',
        id: 'notHave',
        htmlFor: 'notHave'
      },
      {
        contentLabel: 'Poupança',
        name: 'savings',
        type: 'checkbox',
        id: 'savings',
        htmlFor: 'savings'
      },
      {
        contentLabel: 'Renda Fixa',
        name: 'fixedIncome',
        type: 'checkbox',
        id: 'fixedIncome',
        htmlFor: 'fixedIncome'
      },
      {
        contentLabel: 'Renda Variável',
        name: 'variableIncome',
        type: 'checkbox',
        id: 'variableIncome',
        htmlFor: 'variableIncome'
      },
      {
        contentLabel: 'Fundos de Investimento',
        name: 'investmentFunds',
        type: 'checkbox',
        id: 'investmentFunds',
        htmlFor: 'investmentFunds'
      },
      {
        contentLabel: 'Outros',
        name: 'other',
        type: 'checkbox',
        id: 'other',
        htmlFor: 'other'
      }
    ]
  };
  const { title, caption, fields } = question;
  const { handleSubmit } = useValidation(false, sendForm, 'dream');

  const history = useHistory();

  function sendForm() {
    history.push(nextPage);
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <TitleHack>{title}</TitleHack>
      <CaptionHack>{caption}</CaptionHack>
      {fields.map(({ id, htmlFor, contentLabel, name, type }) => (
        <FieldHack
          key={id}
          id={id}
          htmlFor={htmlFor}
          name={name}
          contentLabel={contentLabel}
          type={type}
        />
      ))}

      <ButtonHack as="button">Avançar</ButtonHack>
    </Form>
  );
}

export default FormDoYouInvest;
