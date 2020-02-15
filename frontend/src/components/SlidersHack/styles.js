import styled, { css } from 'styled-components';

import { Figure } from '../VideoThumbnail/styles';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  width: 100vw;
  cursor: pointer;
  transition: transform 100ms linear;

  ${({ position }) =>
    position === 'right' &&
    css`
      transform: translateX(-10%);
    `};

  ${({ position }) =>
    position === 'left' &&
    css`
      transform: translateX(10%);
    `}

  & > ${Figure} {
    width: 85%;
  }
`;

export const Sliders = styled.ol`
  display: flex;
  flex-wrap: nowrap;
  width: ${({ qtdVideos }) => qtdVideos * 100}%;

  transition: transform 200ms linear;

  ${({ idActive, qtdVideos }) => css`
    transform: translateX(calc(100% / ${qtdVideos} * -${idActive}));
  `};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
