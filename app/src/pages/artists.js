import React from 'react';
import { store } from '../store';
import request from '../store/modules/data/actions';

import TemplateInterno from '../templates/interno';

import Table from '../components/Table';

export default function ProtectedPage(props) {
  const usuario = store.getState().auth.user;
  const { pathname: path, search } = props.location;

  console.log(
    'store.getState().data.pagina :>> ',
    store.getState().data.pagina
  );

  console.log('path, search :>> ', path, search);

  // Despachar action para ler na API os dados indicados pela rota 'path':
  store.dispatch(request('READ', 'pagina', path, { by: 'name', sort: 'ASC' }));

  return (
    <TemplateInterno usuario={usuario} pagina={path}>
      <h1>Artists &amp; Bands (arquivo próprio)</h1>
      <div id='conteudo'>
        <Table fonte='pagina' path={path} />
      </div>
    </TemplateInterno>
  );
}
