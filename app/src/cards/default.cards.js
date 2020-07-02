import React, { useEffect } from 'react';
import { store } from '../store';

import Button from '../components/elementos/Botao';
import { columns } from '../objetos/columns.obj';

import { getOptions, go } from '../functions/form.func';

export default function DefaultCard({ path, titulo }) {
  const model = path.split('/')[0];
  const operation = titulo.includes('New') ? 'Create' : 'Search';

  const { card, form } = store.getState().componentes;

  useEffect(() => {
    card && !form.ready && getOptions();
  }, [card, form]);

  return (
    <div className='cardContent'>
      <form>
        {columns[model].map((field, index) => {
          const [labelField, nameField] = field;
          return (
            <section key={index}>
              <label htmlFor={operation}>{labelField}</label>
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
          {operation}
        </Button>
      </form>
    </div>
  );
}
