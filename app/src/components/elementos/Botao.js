import React from 'react';
import { Botao } from '../../styles/Botao.style';

export default function Componente(props) {
  const { tipo, estilo, funcao, children: conteudoDoBotao } = props;
  return (
    <Botao
      estilo={typeof estilo === 'string' && estilo}
      type={tipo ? tipo : 'button'}
      onClick={funcao ? funcao : null}
    >
      {conteudoDoBotao}
    </Botao>
  );
}
