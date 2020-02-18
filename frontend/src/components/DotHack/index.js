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
      <Container color={props.color}>
        <Link to={props.to}>
          <Circle>
            <Border />
            <Progress color={props.color} progress={props.progress} dashed={props.dashed} />
            <Center color={props.color} dashed={props.dashed} />
            <Icon  color={props.color} progress={props.progress} dashed={props.dashed} />
            <Dashed dashed={props.dashed} />
          </Circle>
          <TitleHack>{props.title}</TitleHack>
        </Link>
      </Container>
    </>
  );
}
