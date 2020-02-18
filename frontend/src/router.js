import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Tree from './pages/Tree';
import NodeResolver from './pages/NodeResolver';
import DetailsStartTree from './pages/DetailsStartTree';
import DetailsNodeTree from './pages/DetailsNodeTree';
import Survey from './pages/Survey';

const Router = () => (
  <Routes>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/auth/login" component={Login} />
      <Route path="/tree" component={Tree} />
      <Route path="/node/:node_id" component={NodeResolver} />
      <Route path="/survey/:question" component={Survey} />
    </Switch>
  </Routes>
);

export default Router;
