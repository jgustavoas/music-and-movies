import React from 'react';

export default function TH(coluna, indice) {
  const [tituloDaColuna] = coluna;
  const { source, style } = this;
  const identificacao = `0_${indice}_${tituloDaColuna}_${source}`;

  return (
    <th className={style} key={identificacao}>
      {tituloDaColuna}
    </th>
  );
}
