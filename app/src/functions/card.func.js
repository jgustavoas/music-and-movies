import React from 'react';

// redux
import { store } from '../store';
import { acao } from '../store/modules/components/actions';
import request from '../store/modules/data/actions';

import DefaultCard from '../cards/default.cards';
import Alert from '../cards/alert.cards';
import { MudarSenha, Sair } from '../cards/myAccount.cards';

export async function abrirCard({ id, title, item }) {
  // Always reset the state before opening a new card:
  await store.dispatch(request('RESET', 'card'));
  await store.dispatch(acao('ABRIR', id, title, item));
}

export function fecharCard() {
  store.dispatch(acao('FECHAR'));
  store.dispatch(request('RESET', 'card'));
}

export function cardConditional(settings) {
  const { isPage, id, path, title } = settings;

  if (isPage) {
    fecharCard();
    const paginaEmStore = store.getState().data.pagina.path;
    paginaEmStore !== path && store.dispatch(request('RESET', 'pagina'));
  } else {
    abrirCard({ id, title });
  }
}

export function wichOne(card, { cardItem, cardTitle }) {
  switch (card) {
    case 'changepassword':
      return <MudarSenha />;
    case 'signout':
      return <Sair />;
    case 'remove':
      return <Alert />;
    default:
      return <DefaultCard path={cardItem} titulo={cardTitle} />;
  }
}
