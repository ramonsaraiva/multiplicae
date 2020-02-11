import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default Base;
