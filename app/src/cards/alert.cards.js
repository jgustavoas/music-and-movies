import React from 'react';
import { store } from '../store';
import request from '../store/modules/data/actions';

import Button from '../components/elementos/Botao';
import { fecharCard } from '../functions/card.func';

export default function Alert() {
  const { data } = store.getState().componentes.card;
  if (!data) return null;
  const [tableItem, itemName] = data.colunas[0];

  function deletar() {
    store.dispatch(request('DELETE'));
  }

  return (
    <div>
      <h4>{`Do you really want remove the ${tableItem.toLowerCase()} ${itemName}?`}</h4>
      <br />
      <Button funcao={deletar}>YES</Button>
      &nbsp;
      <Button funcao={fecharCard}>NO</Button>
    </div>
  );
}
