import React, { useEffect } from 'react';
import { store } from '../store';
import Form from '../components/elementos/Form';
import Input from '../components/elementos/Input';
import { columns } from '../objetos/columns.obj';
import { getAllOptions, go } from '../functions/form.func';

export default function DefaultCard({ path, titulo }) {
  const model = path.split('/')[0];
  const operation = titulo.includes('New') ? 'Create' : titulo;
  const { card, form } = store.getState().componentes;
  const obj = { fill: form.fill, options: form.options };

  useEffect(() => {
    card.id && !form.ready && getAllOptions(model);
  }, [card.id, form.ready, model]);

  if (!form.ready) return null;

  return (
    <div className='cardContent'>
      <Form id='cardForm' btLabel={operation} btFunction={go}>
        {columns[model].map(Input, obj)}
      </Form>
    </div>
  );
}
