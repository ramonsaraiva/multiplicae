import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-primary-blue: #00446B;
    --color-primary-blue-dark: #3B596A;
    --color-secondary: #D8D7DF;
    --color-secondary-light: #F4F4F4;
    --color-sencodary-lighter: #FFFFFF;
    
    --color-complementary-blue: #016BA7;
    --color-complementary-blue-light: #0396FF;
    --color-complementary-vine: #8F2D56;
    --color-complementary-red: #CF002F;
    --color-complementary-yellow: #FEBC42;
  }
`;

export default Colors;
