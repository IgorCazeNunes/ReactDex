import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PokemonDetails from '../pages/PokemonDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/details/:id" component={PokemonDetails} />
  </Switch>
);

export default Routes;
