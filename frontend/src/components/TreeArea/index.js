import React from 'react';
import Dot from '../../components/Dot';
import { PrimaryArea, SecondaryArea } from './styles';

function TreeArea(props) {
  var data = {
    conteudo: {
      nome: 'Índices',
      progresso: 45,
      tarefas: [
        { name: 'Selic', status: true },
        { name: 'CDI', status: false },
        { name: 'CDB', status: true },
        { name: 'IPCA', status: false }
      ]
    }
  };
  return (
    <>
      <PrimaryArea>
        <Dot progress={100} color="blue" />
      </PrimaryArea>
      <SecondaryArea>
        <Dot progress={10} color="blue" dashed />
        <Dot progress={20} color="blue" dashed />
      </SecondaryArea>
      <PrimaryArea>
        <Dot progress={100} color="red" />
      </PrimaryArea>
      <SecondaryArea>
        <Dot progress={10} color="red" dashed />
        <Dot progress={20} color="red" dashed />
      </SecondaryArea>
      <PrimaryArea>
        <Dot progress={100} color="yellow" />
      </PrimaryArea>
      <SecondaryArea>
        <Dot progress={10} color="yellow" dashed />
        <Dot progress={20} color="yellow" dashed />
      </SecondaryArea>
    </>
  );
}

export default TreeArea;
