import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Tree from './pages/Tree';

const Router = () => (
  <Routes>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/auth/login" component={Login} />
      <Route path="/tree" component={Tree} />
    </Switch>
  </Routes>
);

export default Router;
