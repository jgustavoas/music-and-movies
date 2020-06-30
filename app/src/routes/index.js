import React from 'react';
import { Switch } from 'react-router-dom';

import Rota from './Rota';

import PaginaLivre from '../pages/livre';
import LoginPage from '../pages/login';
import Default from '../pages/default';
import PaginaDeErro from '../pages/erro';

export default function Rotas() {
  return (
    <Switch>
      <Rota path='/*/*' component={PaginaDeErro} />
      <Rota path='/' exact component={LoginPage} />
      <Rota path='/login' component={LoginPage} />
      <Rota path='/livre' component={PaginaLivre} />
      <Rota path='/inicio' component={Default} requerLogin />
      <Rota path='/artists' component={Default} requerLogin />
      <Rota path='/albums' component={Default} requerLogin />
      <Rota path='/tracks' component={Default} requerLogin />
      <Rota path='/genres' component={Default} requerLogin />
      <Rota path='/*' component={PaginaDeErro} />
    </Switch>
  );
}
