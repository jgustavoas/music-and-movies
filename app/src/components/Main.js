import React from 'react';

import { Main } from '../styles/Main.style';

export default function Componente(props) {
  const { style, children } = props;
  const estilo = style ? style : {};

  return (
    <Main id='Main' style={estilo}>
      {children}
    </Main>
  );
}
