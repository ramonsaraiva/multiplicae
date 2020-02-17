import React from 'react';

import HeaderHack from '../../containers/HeaderHack';
import FormSurvey from '../../containers/FormSurvey';

import { Main, Content } from './styles';

function Survey() {
  return (
    <Main>
      <HeaderHack />
      <Content>
        <FormSurvey />
      </Content>
    </Main>
  );
}

export default Survey;
