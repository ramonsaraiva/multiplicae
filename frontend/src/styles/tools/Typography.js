import { css } from 'styled-components';

const weight = {
  regular: 400,
  bold: 7000
};

export const _h1 = css`
  font-size: 20px;
  line-height: 23px;
  font-weight: ${weight.bold};
  font-weight: bold;
`;

export const _body1 = css`
  font-size: 17px;
  line-height: 20px;
  font-weight: ${weight.regular};
`;

export const _placeholder = css`
  font-size: 17px;
  line-height: 20px;
  font-weight: ${weight.regular};
`;

export const _button = css`
  font-size: 16px;
  line-height: 19px;
  font-weight: ${weight.bold};
  text-transform: uppercase;
`;

export const _caption = css`
  font-size: 14px;
  line-height: 16px;
  font-weight: ${weight.bold};
`;

export const _smallText = css`
  font-size: 12px;
  line-height: 14px;
  font-weight: ${weight.regular};
`;
