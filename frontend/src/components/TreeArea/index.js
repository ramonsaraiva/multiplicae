import React from 'react';
import DotHack from '../DotHack';
import { PrimaryArea, SecondaryArea } from './styles';

function TreeArea(props) {
  var data = [
    {
      name: 'Índices',
      progresso: 85,
      cor: 'blue',
      to: '/details/start-tree',
      tarefas: [
        {
          name: 'Selic',
          status: true,
          progresso: 85,
          to: '/details/node-tree'
        },
        { name: 'CDI', status: false, progresso: 85, to: '/details/node-tree' },
        { name: 'CDB', status: true, progresso: 85, to: '/details/node-tree' },
        { name: 'IPCA', status: false, progresso: 85, to: '/details/node-tree' }
      ]
    },
    {
      name: 'Renda Fixa',
      progresso: 85,
      cor: 'blue',
      tarefas: [
        { name: 'CDI', status: false, progresso: 85, to: '/details/node-tree' },
        { name: 'CDB', status: true, progresso: 85, to: '/details/node-tree' },
        { name: 'IPCA', status: false, progresso: 85, to: '/details/node-tree' }
      ]
    },
    {
      name: 'Índices',
      progresso: 85,
      cor: 'yellow',
      tarefas: [
        { name: 'CDI', status: false, progresso: 85, to: '/details/node-tree' },
        { name: 'CDB', status: true, progresso: 85, to: '/details/node-tree' },
        { name: 'IPCA', status: false, progresso: 85, to: '/details/node-tree' }
      ]
    },
    {
      name: 'Renda Fixa',
      progresso: 85,
      cor: 'red',
      tarefas: [
        { name: 'CDI', status: false, progresso: 85, to: '/details/node-tree' },
        { name: 'CDB', status: true, progresso: 85, to: '/details/node-tree' },
        { name: 'IPCA', status: false, progresso: 85, to: '/details/node-tree' }
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
                to={element.to}
                progress={element.progresso}
                color={element.cor}
                title={element.name}
              />
            </PrimaryArea>
            <SecondaryArea>
              {element.tarefas.map(e => (
                <DotHack
                  to={e.to}
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
