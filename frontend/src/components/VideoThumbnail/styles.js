import styled from 'styled-components';

import play from '../../icons/play.svg';

export const Play = styled.img.attrs({ src: play })`
  position: absolute;
  width: 15px;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover {
    transform: scale(1.3);
  }
`;

export const Thumbnail = styled.img`
  border-radius: var(--radius-medium);
  width: 100%;
`;

export const Time = styled.time`
  position: absolute;
  bottom: var(--gap-smaller);
  right: calc(var(--gap-smaller) / 2);
  background-color: var(--color-primary-blue-dark);
  color: var(--color-sencodary-lighter);
  padding: calc(var(--gap-smaller) / 2);
  border-radius: var(--radius-small);
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-blue-dark);
    opacity: 0.3;
    border-radius: var(--radius-medium);
  }
`;
