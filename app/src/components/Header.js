import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, Nav, User } from '../styles/Header.style';

import { ItensDoMenu as ItensNav } from '../objetos/menuNav.obj';
import { ItensDoMenu as ItensUser } from '../objetos/menuUser.obj';
import { gerarMenu, toggleMenu } from '../functions/menu.func';

export default function Componente({ usuario }) {
  const Nav_Menu = [];
  gerarMenu(ItensNav, Nav_Menu);

  const User_Menu = [];
  ItensUser.minhaConta.titulo = usuario; // Muda o texto "Minha conta" para o nome do usuário.
  gerarMenu(ItensUser, User_Menu);

  return (
    <>
      <Logo id='Logo'>
        <Link to='/'>
          <img src='/react.png' alt='React App' title='React App' />
        </Link>
      </Logo>
      <Nav id='Nav'>
        <ul onClick={(e) => toggleMenu(e)}>{Nav_Menu}</ul>
      </Nav>
      <User id='User'>
        <img src='/user.png' alt='' />
        <ul onClick={(e) => toggleMenu(e)}>{User_Menu}</ul>
      </User>
    </>
  );
}
