import React from 'react';

import { Perfil, Icon } from './styles';
import graph from '../../icons/graph.svg';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';
import ButtonHack from '../../components/ButtonHack';

function PerfilInvestor({ nextPage }) {
  return (
    <Perfil>
      <Icon src={graph} />
      <TitleHack>Investidor nível: moderado.</TitleHack>
      <TextHack>
        Somehow manage to catch a bird but have no idea what to do next, so play
        with it until it dies of shock inspect anything brought into the house,
        but scamper so i am the best hit you unexpectedly.
      </TextHack>

      <ButtonHack to={nextPage}>Começar jornada</ButtonHack>
    </Perfil>
  );
}

export default PerfilInvestor;
