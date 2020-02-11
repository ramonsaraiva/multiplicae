import React from 'react';

import Colors from './settings/Colors';
import Gaps from './settings/Gaps';
import Reset from './generic/Reset';
import Base from './elements/Base';

function Styles() {
  return (
    <>
      <Colors />
      <Gaps />
      <Reset />
      <Base />
    </>
  );
}

export default Styles;
