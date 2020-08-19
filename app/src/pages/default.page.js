import React, { useState, useEffect } from 'react';
import { store } from '../store';

import InnerTemplate from '../templates/inner.template';
import Table from '../components/Table';

import { readDataFrom } from '../functions/general.func';

export default function ProtectedPage(props) {
  const { pathname: path, search: params } = props.location;
  const user = store.getState().auth.user;
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    readDataFrom(path, params, setPageTitle);
  }, [path, params]);

  return (
    <InnerTemplate user={user} pagina={path}>
      <h1>{pageTitle}</h1>
      <div id='conteudo'>
        <Table fonte='pagina' path={path} />
      </div>
    </InnerTemplate>
  );
}
