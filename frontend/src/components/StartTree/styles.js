import styled from 'styled-components';

export const Content = styled.svg`
  & > circle{
    cx:60px;
    cy:60px;
  }
`
export const Border = styled.circle`
  r:50px;
  stroke-width: 8px;
  fill:none;
  stroke:var(--color-secondary);
`
export const Progress = styled.circle`
  r:50px;
  stroke-width: 8px;
  fill:none;
  stroke:var(--color-complementary-blue-light);
  stroke-dasharray: calc(310*(${props=>props.progress}/100)) 310;
  transform: translateY(120px) rotateZ(270deg);
  stroke-linecap:round;
`

export const Center = styled.circle`
  r:20px;
  fill:var(--color-complementary-blue-light);
`
export const Icon = styled.path`
  fill-rule:evenodd; 
  clip-rule: evenodd;
  fill: #D8D7DF;
`