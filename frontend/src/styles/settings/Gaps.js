import { createGlobalStyle } from 'styled-components';

const Gaps = createGlobalStyle`
  :root {
    --gap-small: 12px;
    --gap-medium: 30px;
    --gap-big: 40px;
    --gap-bigger: 80px;
  }
`;

export default Gaps;
