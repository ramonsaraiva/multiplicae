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
import { Link } from 'react-router-dom';

export default function DotHack(props) {
  return (
    <>
      <Container {...props}>
        <Link to={props.to}>
          <Circle {...props}>
            <Border />
            <Progress {...props} />
            <Center {...props} />
            <Icon {...props} />
            <Dashed {...props} />
          </Circle>
          <TitleHack>{props.title}</TitleHack>
        </Link>
      </Container>
    </>
  );
}
