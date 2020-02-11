import { createGlobalStyle } from 'styled-components';

const Gaps = createGlobalStyle`
  :root {
    --gap-small: 10px;
    --gap-medium: 20px;
    --gap-big: 40px;
    --gap-bigger: 80px;
  }
`;

export default Gaps;
