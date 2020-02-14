import React from 'react';
import StartTree from '../../components/StartTree';
import NodeTree from '../../components/NodeTree';

import { Content,PrimaryArea,SecondaryArea } from './styles';

function TreeArea(props) {
    var data = {
        conteudo:{
            nome:"Índices",
            progresso: 45,
            tarefas:[{name:"Selic",status:true},{name:"CDI",status:false},{name:"CDB",status:true},{name:"IPCA",status:false}]
        }
    };
    return (
      <>
      <Content>
      <PrimaryArea>
        <StartTree title={data.conteudo.nome} progress={data.conteudo.progresso}/>
      </PrimaryArea>
      <SecondaryArea>
      {data.conteudo.tarefas.map((e)=> <NodeTree title={e.name} active={e.status} />)}
      </SecondaryArea>
      </Content>
      </>
    );
  }
  
  export default TreeArea;