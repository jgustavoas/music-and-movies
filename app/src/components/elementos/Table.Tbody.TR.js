import React from 'react';
import TD from './Table.TD';

export default function TR(item, indice) {
  const { id, colunas } = item;
  const { source, path, firstOfPage, lastOfPage, style } = this;
  const obj = { id, fields: colunas, source, path };
  const outOfRange = indice <= firstOfPage || indice > lastOfPage;

  if (outOfRange) return null;

  return (
    <tr key={id} className={style} id={`tr_item${id}_${source}`}>
      {colunas.map(TD, obj)}
    </tr>
  );
}
