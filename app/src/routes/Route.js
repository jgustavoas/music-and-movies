import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import Layout from "../components/Layout";

import { store } from '../store';

export default function Rota({
  component: Component,
  authRequired,
  path,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && authRequired) {
    return <Redirect to='/login' />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
