import React from 'react';
import TH from './Table.Thead.TH';

export default function Thead({ source, path, variaveis }) {
  const [linhas] = variaveis;
  const colunas = linhas[1] ? linhas[1].colunas : []; // Só renderiza as colunas quando houver dados.
  const obj = { source, style: 'thead_tr' };

  return (
    <thead id={`thead_${source}`}>
      <tr key={0} className={`thead_tr`}>
        {colunas.map(TH, obj)}
      </tr>
    </thead>
  );
}
