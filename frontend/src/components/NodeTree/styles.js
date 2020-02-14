import styled from 'styled-components';

export const Area = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const Title = styled.path`
  color: var(--color-complementary-blue-light);
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
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