import React from 'react';
import DotHack from '../DotHack';
import { PrimaryArea, SecondaryArea } from './styles';

function TreeArea(props) {
  var data = [
    {
      name: 'Índices',
      progresso: 85,
      cor: 'blue',
      tarefas: [
        { name: 'Selic', status: true, progresso: 85 },
        { name: 'CDI', status: false, progresso: 85 },
        { name: 'CDB', status: true, progresso: 85 },
        { name: 'IPCA', status: false, progresso: 85 }
      ]
    },
    {
      name: 'Renda Fixa',
      progresso: 85,
      cor: 'blue',
      tarefas: [
        { name: 'Selic', status: true, progresso: 85 },
        { name: 'CDI', status: false, progresso: 85 },
        { name: 'CDB', status: true, progresso: 85 },
        { name: 'IPCA', status: false, progresso: 85 }
      ]
    },
    {
      name: 'Índices',
      progresso: 85,
      cor: 'yellow',
      tarefas: [
        { name: 'Selic', status: true, progresso: 85 },
        { name: 'CDI', status: false, progresso: 85 },
        { name: 'CDB', status: true, progresso: 85 },
        { name: 'IPCA', status: false, progresso: 85 }
      ]
    },
    {
      name: 'Renda Fixa',
      progresso: 85,
      cor: 'red',
      tarefas: [
        { name: 'Selic', status: true, progresso: 85 },
        { name: 'CDI', status: false, progresso: 85 },
        { name: 'CDB', status: true, progresso: 85 },
        { name: 'IPCA', status: false, progresso: 85 }
      ]
    }
  ];
  return (
    <>
      {data.map(element => {
        return (
          <>
            <PrimaryArea>
              <DotHack
                progress={element.progresso}
                color={element.cor}
                title={element.name}
              />
            </PrimaryArea>
            <SecondaryArea>
              {element.tarefas.map(e => (
                <DotHack
                  progress={e.progresso}
                  color={element.cor}
                  dashed
                  title={e.name}
                />
              ))}
            </SecondaryArea>
          </>
        );
      })}
    </>
  );
}

export default TreeArea;
