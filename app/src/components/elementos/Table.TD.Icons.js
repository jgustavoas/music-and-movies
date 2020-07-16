import React from 'react';
import { abrirCard } from '../../functions/card.func';
import { icons } from '../../objetos/icons.obj';

export default function Icons({ operation, path }) {
  const { icon, title } = icons[operation];
  const cardSettings = {
    id: `${path.slice(1)}/${operation}`,
    path,
    tipo: 'card',
    title: title,
  };

  return (
    <span title={title} onClick={() => abrirCard(cardSettings)}>
      {icon}
    </span>
  );
}
