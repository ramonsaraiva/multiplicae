import styled from 'styled-components';

export const Ball = styled.svg`
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
export const Locked = styled.path``
export const Unlocked = styled.path``

export const Node =styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px dotted ${props=>props.active?"var(--color-complementary-blue-light)":"var(--color-secondary)"};
    border-radius: 50%;
    width: 80px;
    height: 80px;
`


export const Content =styled.span`
display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-secondary);
    border-radius: 50%;
    width: 60px;
    height: 60px;
`