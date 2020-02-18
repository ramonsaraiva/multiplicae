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
      is_abstract: true,
      is_path: true,
      children: [
        {
          id: 13,
          name: 'Renda Fixa',
          abbreviation: 'Renda Fixa',
          progress: 28,
          is_abstract: true,
          is_path: true,
          children: [
            {
              id: 19,
              name: 'Certificado de Recebíveis Imobiliários/do Agronegócio',
              abbreviation: 'CRI e CRA',
              progress: 100,
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/19/']
            },
            {
              id: 20,
              name: 'Letra de Câmbio',
              abbreviation: 'LC',
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
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/14/']
            },
            {
              id: 15,
              name: 'Tesouro Direto',
              abbreviation: 'TD',
              progress: 0,
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/15/']
            },
            {
              id: 16,
              name: 'Certificado de depósito bancário',
              abbreviation: 'CDB',
              progress: 0,
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/16/']
            },
            {
              id: 17,
              name: 'Debêntures',
              abbreviation: 'DEB',
              progress: 0,
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/17/']
            },
            {
              id: 18,
              name: 'Letra de Crédito Imobiliário/do Agronegócio',
              abbreviation: 'LCI e LCA',
              progress: 0,
              is_abstract: false,
              is_path: false,
              children: [],
              contents: ['http://api.multiplicae.com/api/v1/trails/default/18/']
            }
          ],
          contents: []
        },
        {
          id: 11,
          name: 'Certificado de Depósito Interbancário',
          abbreviation: 'CDI',
          progress: 0,
          is_abstract: false,
          is_path: false,
          children: [],
          contents: ['http://api.multiplicae.com/api/v1/trails/default/11/']
        },
        {
          id: 12,
          name: 'Inflação',
          abbreviation: 'IPCA',
          progress: 0,
          is_abstract: false,
          is_path: false,
          children: [],
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
      <span>{data.hits}</span>
      <TreeArea node={response.root} />
    </>
  );
}

export default Tree;
