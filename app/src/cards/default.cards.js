import React from 'react';

import { store } from '../store';
import request from '../store/modules/data/actions';

import { doNotSubmit, getOptions } from '../functions/form.func';

import history from '../services/history';
import Button from '../components/elementos/Botao';
import { columns } from '../objetos/columns.obj';

export default function DefaultCard({ path, titulo }) {
  const route = path.split('/')[0];
  const wichOne = titulo.includes('New') ? 'Create' : 'Search';

  const { card, form } = store.getState().componentes;
  const [firstColumn] = columns[route];
  const [, col] = firstColumn;

  const go = (e) => {
    console.log('e.target.form :>> ', e.target.form);
    const val = e.target.form[0].value;

    if (wichOne === 'Search') history.push(`${route}?val=${val}`);
    else store.dispatch(request('CREATE', 'card', route, { [col]: val }));
  };

  card && !form.ready && getOptions();

  return (
    <div className='cardContent'>
      <form onSubmit={doNotSubmit()}>
        {columns[route].map((field, index) => {
          const [labelField, nameField] = field;
          return (
            <section key={index}>
              <label htmlFor={wichOne}>{labelField}</label>
              <input
                onKeyDown={(e) => e.key === 'Enter' && go(e)}
                type='text'
                name={nameField}
                id={nameField}
              />
            </section>
          );
        })}
        <Button funcao={go} estilo='cta'>
          {wichOne}
        </Button>
      </form>
    </div>
  );
}
