import React from 'react';

export default function Thead({ source, path, variaveis }) {
  const [linhas] = variaveis;

  const colunas = linhas[1] ? linhas[1].colunas : []; // Só renderiza as colunas quando houver dados.

  return (
    <thead id={`thead_${source}`}>
      <tr key={0} className={`thead_tr`}>
        {colunas.map((coluna, indice) => {
          const [tituloDaColuna] = coluna;
          const identificacao = `0_${indice}_${tituloDaColuna}_${source}`;
          return <th key={identificacao}>{tituloDaColuna}</th>;
        })}
      </tr>
    </thead>
  );
}
