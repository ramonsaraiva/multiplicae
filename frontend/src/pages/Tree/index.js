import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeaderHack from '../../containers/HeaderHack';
import ContentHeader from '../../containers/ContentHeader';
import CardHack from '../../containers/CardHack';
import TitleHack from '../../components/TitleHack';
import TextHack from '../../components/TextHack';
import TreeArea from '../../components/TreeArea';

function Tree() {
  var response = {
    id: 2,
    name: 'Invista nos seus sonhos',
    root: {
      id: 10,
      name: 'Índices',
      abbreviation: 'Índices',
      progress: 9,
      color: 'blue',
      is_abstract: true,
      is_path: true,
      children: [
        {
          id: 13,
          name: 'Renda Fixa',
          abbreviation: 'Renda Fixa',
          progress: 28,
          color: 'blue',
          is_abstract: true,
          is_path: true,
          children: [
            {
              id: 19,
              name: 'Certificado de Recebíveis Imobiliários/do Agronegócio',
              abbreviation: 'CRI e CRA',
              progress: 100,
              is_abstract: false,
              color: 'blue',
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/19/']
            },
            {
              id: 20,
              name: 'Letra de Câmbio',
              abbreviation: 'LC',
              color: 'blue',
              progress: 100,
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/20/']
            },
            {
              id: 14,
              name: 'Poupança',
              abbreviation: 'Poupança',
              progress: 0,
              is_abstract: false,
              color: 'blue',
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/14/']
            }
          ],
          contents: []
        },
        {
          id: 11,
          name: 'Certificado de Depósito Interbancário',
          abbreviation: 'CDI',
          color: 'green',
          progress: 10,
          is_abstract: false,
          is_path: true,
          children: [
            {
              id: 15,
              name: 'Tesouro Direto',
              abbreviation: 'TD',
              progress: 30,
              color: 'green',
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/15/']
            },
            {
              id: 16,
              name: 'Certificado de depósito bancário',
              abbreviation: 'CDB',
              color: 'green',
              progress: 0,
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/16/']
            }
          ],
          contents: ['http://api.multiplicae.com/api/v1/trails/default/11/']
        },
        {
          id: 12,
          name: 'Inflação',
          abbreviation: 'IPCA',
          color: 'red',
          progress: 57,
          is_abstract: false,
          is_path: true,
          children: [
            {
              id: 17,
              name: 'Debêntures',
              abbreviation: 'DEB',
              progress: 0,
              color: 'red',
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/17/']
            },
            {
              id: 18,
              name: 'Letra de Crédito Imobiliário/do Agronegócio',
              abbreviation: 'LCI e LCA',
              progress: 20,
              color: 'red',
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/18/']
            }
          ],
          contents: ['http://api.multiplicae.com/api/v1/trails/default/12/']
        }
      ],
      contents: []
    }
  };
  const [data, setData] = useState({ hits: [] });
  useEffect(async () => {
    const result = await axios(
      'http://api.multiplicae.com/api/v1/trails/default/'
    );
    setData(result.data);
  });
  return (
    <>
      <HeaderHack />

      <ContentHeader>
        <CardHack contentAction="Monte a sua jornada">
          <TitleHack>Invista nos seus sonhos</TitleHack>

          <TextHack>
            Entenda sobre investimentos a partir do básico e perca o medo de
            investir!
          </TextHack>
        </CardHack>
      </ContentHeader>
      <TreeArea node={response.root} />
    </>
  );
}

export default Tree;
