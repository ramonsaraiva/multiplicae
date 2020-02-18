import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderHack from '../../containers/HeaderHack';
import { Main, Content } from './styles';
import FormDream from '../../containers/FormDream';
import FormDreamMoney from '../../containers/FormDreamMoney';

function Survey() {
  const { question } = useParams();

  function whatShowForm() {
    const questions = [
      <FormDream nextPage="/survey/1" />,
      <FormDreamMoney nextPage="/survey/2" />
    ];

    return questions[question];
  }

  return (
    <Main>
      <HeaderHack />
      <Content>{whatShowForm()}</Content>
    </Main>
  );
}

export default Survey;
