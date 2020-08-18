import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import FreePage from '../pages/free.page';
import LoginPage from '../pages/login.page';
import Default from '../pages/default.page';
import ErrorPage from '../pages/error.page';

export default function Routes() {
  return (
    <Switch>
      <Route path='/*/*' component={ErrorPage} />
      <Route path='/' exact component={LoginPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/livre' component={FreePage} />
      <Route path='/inicio' component={Default} authRequired />
      <Route path='/artists' component={Default} authRequired />
      <Route path='/albums' component={Default} authRequired />
      <Route path='/tracks' component={Default} authRequired />
      <Route path='/movies' component={Default} authRequired />
      <Route path='/genres' component={Default} authRequired />
      <Route path='/*' component={ErrorPage} />
    </Switch>
  );
}
