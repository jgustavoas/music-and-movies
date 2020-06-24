import React from 'react';
import { Link } from 'react-router-dom';

import { store } from '../store';
import request from '../store/modules/data/actions';

import { abrirCard, fecharCard } from '../functions/card.func';

const telas = {};

const Item = ({ id, path, tipo, title }) => {
  const gotTo = path ? `/${path}` : undefined;

  function func() {
    if (tipo === 'page') {
      fecharCard();

      const paginaEmStore = store.getState().data.pagina.path;
      paginaEmStore !== path && store.dispatch(request('RESET', 'pagina'));
    } else {
      abrirCard({ id, path, tipo, title });
    }
  }

  return (
    <li
      className={tipo === 'page' ? 'link' : ''}
      onClick={() => {
        func();
      }}
      key={id}
    >
      {tipo === 'page' ? (
        <Link to={gotTo}>
          <span>{title}</span>
        </Link>
      ) : (
        title
      )}
    </li>
  );
};

export function gerarMenu(objeto, Componente) {
  Object.entries(objeto).forEach((entry) => {
    const item = entry[0];
    const { titulo, subitens } = entry[1];

    telas[item] = [];

    if (subitens) {
      Object.entries(subitens).forEach((sub) => {
        const [subitem, properties] = sub;
        const { titulo, tipo, path, columns } = properties;

        telas[item].push(
          <Item
            key={`${item}/${subitem}`}
            title={titulo}
            id={`${item}/${subitem}`}
            tipo={tipo}
            path={path}
            columns={columns}
            properties={properties}
          />
        );
      });
    }

    Componente.push(
      <li key={item}>
        {titulo}
        <ul>{telas[item]}</ul>
      </li>
    );
  });
}

export function toggleMenu(e) {
  if (
    e.target.parentElement.parentNode.id === 'Nav' ||
    e.target.parentElement.parentNode.id === 'User'
  ) {
    const itens = e.currentTarget.children;
    Array.from(itens).forEach((i) => {
      i.className = '';
      i.firstElementChild.style = 'display: none;';
    });

    e.target.className = 'aberto';
    e.target.firstElementChild.style = 'display: block';
  }
}

// Escutar qualquer clique fora do menu para fechar qualquer item aberto ===========================
export function fecharMenu(e) {
  const componentesDoLayout = e.currentTarget.children;

  Object.entries(componentesDoLayout).forEach((componente) => {
    const Componente = componente[1];
    const menusNivelDois = Componente.querySelectorAll('ul li ul');

    if (e.target.parentElement.parentNode.id !== Componente.id) {
      Array.from(menusNivelDois).forEach((menu) => {
        menu.parentElement.className = '';
        menu.style = 'display: none;';
      });
    }
  });
}
