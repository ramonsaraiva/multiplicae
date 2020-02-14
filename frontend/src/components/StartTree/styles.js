import styled from 'styled-components';

export const Area = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const Content = styled.svg`
  width:108px;
  height:108px;
  border-radius: 50%;

  & > circle{
    cx:54px;
    cy:54px;
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
  transform: translateY(108px) rotateZ(270deg);
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
export const Title = styled.path`
  color: var(--color-complementary-blue-light);
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`