import React from 'react';
import {
  Container,
  Circle,
  Border,
  Progress,
  Center,
  Icon,
  Dashed
} from './styles';
import TitleHack from '../TitleHack';

export default function DotHack(props) {
  return (
    <Container>
      <Circle {...props}>
        <Border />
        <Progress {...props} />
        <Center {...props} />
        <Icon {...props} />
        <Dashed {...props} />
      </Circle>
      <TitleHack>{props.title}</TitleHack>
    </Container>
  );
}
