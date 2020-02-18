import React from 'react';

import { Success } from './styles';
import TitleHack from '../../components/TitleHack';
import ButtonHack from '../../components/ButtonHack';

function SuccessSurvey({ nextPage }) {
  return (
    <Success>
      <TitleHack>
        Tudo certo! Já conseguimos montar o melhor plano de apredizado para
        você!
      </TitleHack>

      <ButtonHack to={nextPage}>Ver perfil</ButtonHack>
    </Success>
  );
}

export default SuccessSurvey;
