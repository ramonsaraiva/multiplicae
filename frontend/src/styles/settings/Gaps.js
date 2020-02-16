import { createGlobalStyle } from 'styled-components';

const Gaps = createGlobalStyle`
  :root {
    --gap-smaller: 8px;
    --gap-half-smaller: calc(var(--gap-smaller) / 2);
    --gap-small: 12px;
    --gap-medium: 16px;
    --gap-double-small: calc(var(--gap-small) * 2);
    --gap-big: 30px;
    --gap-bigger: 80px;
  }
`;

export default Gaps;
