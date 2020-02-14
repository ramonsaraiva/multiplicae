import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Tree from './pages/Tree';
import DetailsStartTree from './pages/DetailsStartTree';

const Router = () => (
  <Routes>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/auth/login" component={Login} />
      <Route path="/tree" component={Tree} />
      <Route path="/details/start-tree" component={DetailsStartTree} />
    </Switch>
  </Routes>
);

export default Router;
