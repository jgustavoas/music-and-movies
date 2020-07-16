import React from 'react';

export default function TH(coluna, indice) {
  const [tituloDaColuna] = coluna;
  const { source } = this;
  const identificacao = `0_${indice}_${tituloDaColuna}_${source}`;

  return <th key={identificacao}>{tituloDaColuna}</th>;
}
