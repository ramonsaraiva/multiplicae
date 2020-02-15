import { createGlobalStyle } from 'styled-components';

const Gaps = createGlobalStyle`
  :root {
    --gap-smaller: 8px;
    --gap-small: 12px;
    --gap-double-small: calc(var(--gap-small) * 2);
    --gap-medium: 15px;
    --gap-big: 30px;
    --gap-bigger: 80px;
  }
`;

export default Gaps;
