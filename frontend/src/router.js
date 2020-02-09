import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

const Router = () => (
  <Routes>
    <Switch>
      <Route path="/" component={() => <h1>Home do futuro!!!</h1>} exact />
      <Route path="/auth/login" component={Login} />
      <Route
        path="/auth/signup"
        component={() => <h1>Signup do futuro!!!</h1>}
      />
    </Switch>
  </Routes>
);

export default Router;
