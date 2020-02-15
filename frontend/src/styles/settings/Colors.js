import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-primary-blue: #00446B;
    --color-primary-blue-dark: #3B596A;
    --color-secondary: #D8D7DF;
    --color-secondary-light: #F4F4F4;
    --color-sencodary-lighter: #FFFFFF;
    
    --color-complementary-blue: #016BA7;
    --color-complementary-vine: #8F2D56;
    --color-complementary-red: #CF002F;
    --color-complementary-yellow: #FEBC42;

    --color-complementary-blue-light: #0396FF;
    --color-complementary-vine-light: #8F2D56;
    --color-complementary-red-light: #CF002F;
    --color-complementary-yellow-light: #FEBC42;

    --color-border: rgba(15, 76, 129, 0.3);
    --color-separation: rgba(1, 107, 167, 0.3);s
  }
`;

export default Colors;
