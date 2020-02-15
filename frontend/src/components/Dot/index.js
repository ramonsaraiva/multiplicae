import React from 'react';
import { Container, Border, Progress, Center, Icon, Dashed } from './styles';

export default function Dot(props) {
  return (
    <>
      <Container {...props}>
        <Border />
        <Progress {...props} />
        <Center {...props} />
        <Icon {...props} />
        <Dashed {...props} />
      </Container>
    </>
  );
}
