import React, { useState, useEffect } from 'react';
import { store } from '../store';
import Form from '../components/elements/Form';
import Input from '../components/elements/Input';
import { columns } from '../objects/columns.obj';
import { getAllOptions, go } from '../functions/form.func';

export default function DefaultCard({ path, titulo }) {
  const model = path.split('/')[0];
  const operation = titulo.includes('New') ? 'Create' : titulo;

  const { card, form } = store.getState().componentes;
  const [fill, setFill] = useState(form.fill);

  const inputs = columns[model];
  const obj = { state: { fill, setFill }, options: form.options };

  useEffect(() => {
    card.id && !form.ready && getAllOptions(model);
  }, [card.id, form.ready, model]);

  if (!form.ready) return null;

  return (
    <div className='cardContent'>
      <Form id='cardForm' btLabel={operation} btFunction={go}>
        {inputs.map(Input, obj)}
      </Form>
    </div>
  );
}
