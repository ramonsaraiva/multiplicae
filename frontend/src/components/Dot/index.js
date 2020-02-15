import React from 'react';
import { Container, Border, Progress, Center, Icon, Dashed } from './styles';
import TitleHack from '../TitleHack';

export default function Dot(props) {
  return (
    <div>
      <Container {...props}>
        <Border />
        <Progress {...props} />
        <Center {...props} />
        <Icon {...props} />
        <Dashed {...props} />
      </Container>
      <TitleHack>Índices</TitleHack>
    </div>
  );
}
