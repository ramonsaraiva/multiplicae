import React from 'react';

import MainHome from '../../containers/MainHome';
import HeaderHack from '../../containers/HeaderHack';
import CardHack from '../../containers/CardHack';
import FooterHack from '../../containers/FooterHack';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';

function Home() {
  return (
    <MainHome>
      <HeaderHack />

      <CardHack contentAction="Montar objetivo" hrefAction="/survey">
        <TitleHack>Conquiste seus objetivos</TitleHack>

        <TextHack>
          Se você sonha grande, mas não sabe por onde começar a juntar dinheiro,
          você está no lugar certo! E não, você não precisa ser um milionário
          para investir! Faça o teste e tenha aulas feitas especialmente para o
          seu perfil!
        </TextHack>
      </CardHack>

      <FooterHack />
    </MainHome>
  );
}

export default Home;
