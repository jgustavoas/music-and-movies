import React from 'react';
import TR from './Table.Tbody.TR';

export default function Tbody({ source, path, variaveis }) {
  const [linhas, page, limit] = variaveis;
  const obj = {
    source,
    path,
    firstOfPage: limit * page - limit,
    lastOfPage: limit * page,
    style: 'tbody_tr',
  };

  return (
    <tbody id={`tbody_${source}`} className={source}>
      {linhas.map(TR, obj)}
    </tbody>
  );
}
