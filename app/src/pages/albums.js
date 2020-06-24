import React from 'react';
import { store } from '../store';
import request from '../store/modules/data/actions';

import TemplateInterno from '../templates/interno';

import Table from '../components/Table';

export default function ProtectedPage(props) {
  const usuario = store.getState().auth.user;
  const path = props.location.pathname;

  // Despachar action para ler na API os dados indicados pela rota 'path':
  store.dispatch(
    request('READ', 'pagina', 'Album', { by: 'title', sort: 'ASC' })
  );

  return (
    <TemplateInterno usuario={usuario} pagina={path}>
      <h1>Albums</h1>
      <div id='conteudo'>
        <Table fonte='pagina' path={path} />
      </div>
    </TemplateInterno>
  );
}
