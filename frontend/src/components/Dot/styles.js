import styled from 'styled-components';

export const Container = styled.svg`
  width: 110px;
  height: 110px;
  border-radius: 50%;

  & > circle {
    cx: 55px;
    cy: 55px;
  }
`;
export const Border = styled.circle`
  r: 50px;
  stroke-width: 10px;
  fill: none;
  stroke: var(--color-secondary);
`;
export const Progress = styled.circle`
  r: 50px;
  stroke-width: 9px;
  fill: none;
  stroke: ${props => 'var(--color-complementary-' + props.color + '-light)'};
  stroke-dasharray: calc(310 * (${props => props.progress} / 100)) 310;
  transform: translateX(-1px) translateY(109px) rotateZ(271deg);
  stroke-linecap: round;
`;
export const Center = styled.circle`
  r: ${props => (props.dashed ? '35px' : '20px')};
  fill: ${props =>
    props.dashed
      ? 'none'
      : 'var(--color-complementary-' + props.color + '-light)'};
  stroke: ${props => (props.dashed ? 'var(--color-secondary)' : 'none')};
`;
export const Icon = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: ${props =>
    props.progress > 0
      ? 'var(--color-complementary-' + props.color + ')'
      : 'var(--color-secondary)'};
  d: ${props =>
    props.progress > 0 ? 'var(--icon-unlocked)' : 'var(--icon-locked)'};
`;
export const Dashed = styled.circle`
  r: 50px;
  stroke-width: 10px;
  fill: none;
  stroke: ${props => (props.dashed ? '  #fff' : 'none')};
  stroke-dasharray: 4;
`;
