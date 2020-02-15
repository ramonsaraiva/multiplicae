import React from 'react';
import Dot from '../../components/Dot';

import { Content } from './styles';

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
      <Dot progress={47} color="yellow" />
    </>
  );
}

export default TreeArea;
