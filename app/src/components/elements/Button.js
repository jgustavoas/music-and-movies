import React from 'react';
import { Button } from '../../styles/Button.style';

export default function Componente(props) {
  const { tipo, estilo, funcao, children: conteudoDoBotao } = props;
  return (
    <Button
      estilo={typeof estilo === 'string' && estilo}
      type={tipo ? tipo : 'button'}
      onClick={funcao ? funcao : null}
    >
      {conteudoDoBotao}
    </Button>
  );
}
