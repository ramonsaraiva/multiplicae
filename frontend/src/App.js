import React from 'react';

import Colors from './styles/settings/Colors';
import Reset from './styles/generic/Reset';
import Base from './styles/elements/Base';
import Router from './router';

function App() {
  return (
    <>
      <Reset />
      <Base />
      <Colors />

      <Router />
    </>
  );
}

export default App;
