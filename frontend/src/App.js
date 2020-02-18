import React from 'react';

import TagManager from 'react-gtm-module'

import Styles from './styles';
import Router from './router';

TagManager.initialize({
  gtmId: 'GTM-NQ3NPZJ'
})

function App() {
  return (
    <>
      <Styles />

      <Router />
    </>
  );
}

export default App;
