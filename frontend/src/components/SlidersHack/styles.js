import styled, { css } from 'styled-components';

import { Thumbnail } from '../VideoThumbnail/styles';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  width: 100vw;
  cursor: pointer;
  transition: transform 100ms linear;

  ${({ position }) =>
    position === 'right' &&
    css`
      transform: translateX(calc(var(--gap-big) * -1.5));
    `};

  ${({ position }) =>
    position === 'left' &&
    css`
      transform: translateX(calc(var(--gap-big) * 1.5));
    `}

  & > ${Thumbnail} {
    width: calc(100% - var(--gap-big) * 2);
  }
`;

export const Content = styled.ol`
  display: flex;
  flex-wrap: nowrap;
  width: ${({ qtdVideos }) => qtdVideos * 100}%;

  transition: transform 200ms linear;

  ${({ idActive, qtdVideos }) => css`
    transform: translateX(calc(100% / ${qtdVideos} * -${idActive}));
  `};
`;

export const Sliders = styled.div`
  width: 100%;
  overflow: hidden;
`;
