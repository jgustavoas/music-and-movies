import React from 'react';
import history from '../services/history';

import Button from '../components/elementos/Botao';

export default function DefaultCard({ path, titulo }) {
  const route = path.split('/')[0];
  const operation = titulo.includes('New') ? 'Create' : 'Search';

  const go = (e) => {
    const val =
      e.target.offsetParent.children[1].children.form.children[0].children[
        operation
      ].value;

    history.push(`${route}?val=${val}`);
  };

  return (
    <div className='cardContent'>
      <div id='form'>
        <fieldset>
          <label htmlFor='new'>Name</label>
          <input
            onKeyDown={(e) => e.key === 'Enter' && go(e)}
            type='text'
            name=''
            id={operation}
          />
        </fieldset>
        <Button funcao={go} estilo='cta'>
          {operation}
        </Button>
      </div>
    </div>
  );
}
