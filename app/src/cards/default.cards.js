import React from 'react';

import { store } from '../store';
import request from '../store/modules/data/actions';

import history from '../services/history';
import Button from '../components/elementos/Botao';
import { columns } from '../objetos/columns.obj';

export default function DefaultCard({ path, titulo }) {
  const route = path.split('/')[0];
  const wichOne = titulo.includes('New') ? 'Create' : 'Search';

  const [firstColumn] = columns[route];
  const [, col] = firstColumn;

  const go = (e) => {
    const val =
      e.target.offsetParent.children[1].children.form.children[0].children[
        wichOne
      ].value;

    if (wichOne === 'Search') history.push(`${route}?val=${val}`);
    else store.dispatch(request('CREATE', 'card', route, { [col]: val }));
  };

  return (
    <div className='cardContent'>
      <div id='form'>
        <fieldset>
          <label htmlFor={wichOne}>Name</label>
          <input
            onKeyDown={(e) => {
              e.key === 'Enter' && go(e);
            }}
            type='text'
            name=''
            id={wichOne}
          />
        </fieldset>
        <Button funcao={go} estilo='cta'>
          {wichOne}
        </Button>
      </div>
    </div>
  );
}
