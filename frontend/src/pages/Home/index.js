import React from 'react';

import MainOpen from '../../containers/MainOpen';
import TitleHack from '../../components/TitleHack';
import ButtonHack from '../../components/ButtonHack';

function Home() {
  return (
    <MainOpen>
      <TitleHack>Boas vindas</TitleHack>

      <ButtonHack to="/auth/signup">Comece agora</ButtonHack>
      <ButtonHack to="/auth/login">Já tenho conta</ButtonHack>
    </MainOpen>
  );
}

export default Home;
