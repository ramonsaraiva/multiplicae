import React from 'react';

import MainHome from '../../containers/MainHome';
import TitleHack from '../../components/TitleHack';
import ButtonHack from '../../components/ButtonHack';

function Home() {
  return (
    <MainHome>
      <TitleHack>Boas vindas</TitleHack>

      <ButtonHack to="/auth/signup">Comece agora</ButtonHack>
      <ButtonHack to="/auth/login">Já tenho conta</ButtonHack>
    </MainHome>
  );
}

export default Home;
