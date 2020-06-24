import React, { useState } from 'react';
import { Select } from '../../styles/Select.style';

export default function Componente(props) {
  const { valido, id, textoDoLabel, valor, itens, classeCSS } = props;

  const [stateValor, setValorInput] = useState(valor);
  const [atributos, setAtributos] = useState({ valido });

  function atualizarValorDoInput(valor) {
    setValorInput(valor);
  }

  function alterarAtributo() {
    !valido &&
      setAtributos({
        valido: !valido,
      });
  }

  return (
    <Select valido={atributos.valido}>
      <label className={classeCSS} htmlFor={id}>
        {textoDoLabel}
      </label>
      <select
        onFocus={() => alterarAtributo()}
        onChange={(e) => atualizarValorDoInput(e.target.value)}
        name={id}
        id={id}
        value={stateValor}
      >
        <option>Selecione</option>
        {itens.map((item, key) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </Select>
  );
}
