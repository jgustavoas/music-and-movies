import React from 'react';

import { store } from '../store';
import request from '../store/modules/data/actions';

import { $ } from '../functions/dom.func';
import { paginador } from '../functions/componente.func';

export default function Paginacao({ linhas, source, path, limit, setStates }) {
  const [pagina, setPagina, paginacao, setPaginacao] = setStates;
  const elementoPaginador = $(`#paginador_${source}`);

  return (
    <div className='paginacao'>
      <div>
        <span>{linhas.length - 1} linhas</span>
        &nbsp;
        {linhas.length > 10 && (
          <select
            name={`limitador_${source}`}
            id={`limitador_${source}`}
            value={limit} // Valor que muda conforme o evento 'onChange' abaixo.
            onChange={(e) => {
              setPagina(1); // Voltar para a página 1.

              elementoPaginador.scrollTo(0, 0); // Garantir que o scroll da paginação volte ao início.
              //$(`#tbody_${source}`).scrollTo(0, 0); // Garantir que o scroll da tabela volte ao topo.

              store.dispatch(
                request('LIMITAR', source, path, {
                  limit: e.target.value,
                })
              );

              paginador(linhas.length - 1, e.target.value, setPaginacao);
            }}
          >
            <option value='10'>10 linhas/página</option>
            <option value='25'>25 linhas/página</option>
            <option value='50'>50 linhas/página</option>
          </select>
        )}
      </div>

      <div className='paginas'>
        {paginacao.length > 5 ? (
          <>
            <span
              className='material-icons'
              onClick={() =>
                elementoPaginador.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              first_page
            </span>
            <span
              className='material-icons'
              onClick={() =>
                elementoPaginador.scrollBy({
                  left: -34,
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              chevron_left
            </span>
          </>
        ) : (
          ''
        )}

        <div className='paginador' id={`paginador_${source}`}>
          {paginacao.map((p) => {
            const classe = p === pagina ? 'paginaAtual' : '';
            const titulo =
              p === pagina ? 'Página atual' : `Ir para a página ${p}`;
            return (
              <span
                title={titulo}
                alt={titulo}
                className={classe}
                key={p}
                onClick={() => {
                  $(`#tbody_${source}`).scrollTo(0, 0); // Garantir que o scroll da tabela volte ao topo.
                  setPagina(p);
                }}
              >
                &nbsp;
                {p}
                &nbsp;
              </span>
            );
          })}
        </div>

        {paginacao.length > 5 ? (
          <>
            <span
              className='material-icons'
              onClick={() =>
                elementoPaginador.scrollBy({
                  left: 34,
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              chevron_right
            </span>
            <span
              className='material-icons'
              onClick={() =>
                elementoPaginador.scrollTo({
                  left: 50000,
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              last_page
            </span>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
