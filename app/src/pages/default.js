import React, { useState, useEffect } from 'react';
import { store } from '../store';

import TemplateInterno from '../templates/interno';
import Table from '../components/Table';

import { readDataFrom } from '../functions/gerais.func';

export default function ProtectedPage(props) {
  const { pathname: path, search: params } = props.location;
  const usuario = store.getState().auth.user;
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    readDataFrom(path, params, setPageTitle);
  }, [path, params]);

  return (
    <TemplateInterno usuario={usuario} pagina={path}>
      <h1>{pageTitle}</h1>
      <div id='conteudo'>
        <Table fonte='pagina' path={path} />
      </div>
    </TemplateInterno>
  );
}
