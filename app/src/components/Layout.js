import React from 'react';
import { store } from '../store';

import { fecharMenu } from '../functions/menu.func';

import { Layout } from '../styles/Layout.style';

export default function Componente(props) {
  const { signed } = store.getState().auth;

  const paginasComuns = ['/', '/login', '/public', '*'];
  const ehPaginaComum = paginasComuns.includes(props.pagina);

  const funcaoFecharMenu =
    signed && !ehPaginaComum ? (e) => fecharMenu(e) : null;
  const idDoLayout = signed && !ehPaginaComum ? 'Layout' : 'Login';

  return (
    <Layout id={idDoLayout} onClick={funcaoFecharMenu}>
      {props.children}
    </Layout>
  );
}
