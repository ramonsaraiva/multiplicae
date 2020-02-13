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
  stroke: ${props=>props.active?"var(--color-complementary-blue-light)":"var(--color-secondary)"};
  stroke-dasharray: 4;
`
export const Center = styled.circle`
    r:35px;
    stroke-width: 2px;
    fill:none;
    stroke:var(--color-secondary);
`
export const Icon = styled.path`
  fill-rule:evenodd; 
  clip-rule: evenodd;
  fill: ${props=>props.active?"#3B596A":"#D8D7DF"};
`