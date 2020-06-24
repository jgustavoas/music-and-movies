import React from 'react';
import { Input } from '../../styles/Input.style';

import { marcarTodas } from '../../functions/form.func';

export default function Componente(props) {
  const { id, nome, tipo, marcado, estado } = props;

  // Se o checkbox tiver um estado...
  if (estado) {
    const [stateTodas, setTodas] = estado.todas ? estado.todas : [null, null];
    const [linhas, setLinhas] = estado.cada;

    function mudarStateDaLinha() {
      const novoState = linhas.map((linha) => {
        if (linha.id === id) {
          linha.checked = !marcado;
        }
        return linha;
      });

      setLinhas(novoState);
    }
    const qualFuncao =
      id === 'boxQueMarcaTodos'
        ? () => marcarTodas(linhas, setLinhas, stateTodas, setTodas)
        : () => mudarStateDaLinha();

    return (
      <Input
        type={tipo}
        id={id}
        name={nome}
        checked={marcado}
        onChange={qualFuncao}
      />
    );
  } else {
    //...se não, o input é disabled
    return <Input type={tipo} id={id} name={nome} checked={marcado} disabled />;
  }
}
