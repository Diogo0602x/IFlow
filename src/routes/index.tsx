import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
  </Switch>
);

export default Routes;
