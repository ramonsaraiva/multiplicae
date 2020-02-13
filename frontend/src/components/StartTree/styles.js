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

export const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: var(--color-complementary-blue-light);
  border-radius: 50%;
  width: 40%;
  height: 40%;
  color: var(--color-sencodary-lighter);
  box-shadow: 0px 6px 8px rgba(15, 76, 129, 0.3);
`;

export const Start = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border: 8px solid var(--color-secondary);
  border-radius: 50%;
  width: 104px;
  height: 104px;
  box-shadow: 0px 6px 8px rgba(15, 76, 129, 0.3);

  &::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    border: inherit;
    border-top-color: ${props=>props.progress > 25?"var(--color-complementary-blue-light)":"var(--color-secondary)"};
    border-right-color: ${props=>props.progress >= 50?"var(--color-complementary-blue-light)":"var(--color-secondary)"};
    border-bottom-color: ${props=>props.progress >= 75?"var(--color-complementary-blue-light)":"var(--color-secondary)"};
    border-left-color: ${props=>props.progress = 100?"var(--color-complementary-blue-light)":"var(--color-secondary)"};
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
`;
