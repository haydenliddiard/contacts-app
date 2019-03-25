import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Session from './Session';
import App from './App';

import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Session} />
      <Route path="/list/:listId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
