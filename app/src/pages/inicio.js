import React from 'react';
import { store } from '../store';

import TemplateInterno from '../templates/interno';
import Table from '../components/Table';

import { dispatch } from '../functions/gerais.func';

export default function ProtectedPage(props) {
  const { pathname: path, search } = props.location;
  const usuario = store.getState().auth.user;
  const pageTitle = store.getState().data.pagina.settings.titulo;

  dispatch(path, search);

  return (
    <TemplateInterno usuario={usuario} pagina={path}>
      <h1>{pageTitle}</h1>
      <div id='conteudo'>
        <Table fonte='pagina' path={path} />
      </div>
    </TemplateInterno>
  );
}
