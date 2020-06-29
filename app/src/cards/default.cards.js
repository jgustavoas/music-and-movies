import React from 'react';

import Button from '../components/elementos/Botao';

export default function DefaultCard({ path, titulo }) {
  const operation = titulo.includes('New') ? 'Create' : 'Search';
  return (
    <div className='cardContent'>
      <form>
        <fieldset>
          <label htmlFor='new'>Name</label>
          <input type='text' name='' id='new' />
        </fieldset>
        <Button>{operation}</Button>
      </form>
    </div>
  );
}
