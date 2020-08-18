import React from 'react';
import { abrirCard } from '../../functions/card.func';
import { icons } from '../../objects/icons.obj';

export default function Icons({ operation, item, path }) {
  const { icon, title } = icons[operation];
  const cardSettings = {
    id: `${path.slice(1)}/${operation}`,
    title: title,
    item,
  };

  return (
    <span title={title} onClick={() => abrirCard(cardSettings)}>
      {icon}
    </span>
  );
}
