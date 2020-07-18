import React from 'react';
import Link from './Link';
import { cardConditional } from '../../functions/card.func';

export default function Item({ settings }) {
  const { id, titulo: title, tipo, path } = settings;
  const goTo = path ? `/${path}` : null;
  const isPage = tipo === 'page';
  const parameters = { isPage, id, path, title };
  const obj = {
    true: { style: 'link', item: <Link to={goTo} title={title} /> },
    false: { style: '', item: title },
  };

  const { style, item } = obj[isPage.toString()];

  return (
    <li className={style} onClick={() => cardConditional(parameters)} key={id}>
      {item}
    </li>
  );
}
