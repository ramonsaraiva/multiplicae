import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderHack from '../../containers/HeaderHack';
import FormSurvey from '../../containers/FormSurvey';

import { Main, Content } from './styles';

function Survey() {
  const { question } = useParams();

  return (
    <Main>
      <HeaderHack />
      <Content>
        <FormSurvey question={question} />
      </Content>
    </Main>
  );
}

export default Survey;
