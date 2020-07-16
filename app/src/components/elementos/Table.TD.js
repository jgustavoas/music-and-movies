import React from 'react';
import Icons from './Table.TD.Icons';

export default function TD(coluna, indice) {
  const [title, data] = coluna;
  const { id, source, path } = this;
  const identity = `${id}_${indice}_${title}_${source}`;

  const itemDaColuna = typeof data === 'object' ? data.Name : data;

  return (
    <td key={identity}>
      <section>
        {itemDaColuna}
        <section>
          <Icons operation='edit' path={path} />
          <Icons operation='remove' path={path} />
        </section>
      </section>
    </td>
  );
}
