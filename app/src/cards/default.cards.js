import React, { useEffect } from 'react';
import { store } from '../store';

import Button from '../components/elementos/Botao';
import Input from '../components/elementos/Input';

import { columns } from '../objetos/columns.obj';
import { getOptions, go } from '../functions/form.func';

export default function DefaultCard({ path, titulo }) {
  const model = path.split('/')[0];
  const operation = titulo.includes('New') ? 'Create' : 'Search';
  const { card, form } = store.getState().componentes;
  const { options, ready } = form;

  useEffect(() => {
    card && !ready && getOptions();
  }, [card, ready]);

  if (!ready) return null;

  return (
    <div className='cardContent'>
      <form onSubmit={(e) => e.preventDefault()}>
        {columns[model].map((field, index) => {
          return <Input settings={[...field, options]} key={index} />;
        })}
        <Button funcao={go} estilo='cta'>
          {operation}
        </Button>
      </form>
    </div>
  );
}
