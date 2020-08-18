import React from 'react';
import Item from '../components/elements/Header.Nav.Menu.Item';

export function gerarMenu(objeto) {
  return Object.entries(objeto).map((entry, index) => {
    const section = entry[0];
    const { titulo, subitens } = entry[1];

    const Subitems = () => {
      if (!subitens) return;

      return Object.entries(subitens).map((sub, index) => {
        const [subitem, properties] = sub;
        const settings = { id: `${section}/${subitem}`, ...properties };
        const component = <Item key={index} settings={settings} />;

        return component;
      });
    };

    return (
      <li key={index}>
        {titulo}
        <ul>{Subitems()}</ul>
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
