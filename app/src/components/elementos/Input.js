import React, { useState } from 'react';
import { CampoDeInput } from '../../styles/Input.style';

export default function Componente(props) {
  const {
    tipo,
    valido,
    id,
    textoDoLabel,
    placeholder,
    valor,
    classeCSS,
  } = props;

  const [stateValor, setValorInput] = useState(valor);
  const [atributos, setAtributos] = useState({ valido, placeholder });

  function atualizarValorDoInput(valor) {
    setValorInput(valor);

    if (classeCSS !== 'Sidebar.inputs') {
      const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (valor.length < 4 || (tipo === 'email' && !valor.match(regexpEmail))) {
        setAtributos({
          valido: false,
          placeholder,
        });
      } else {
        setAtributos({
          valido: true,
          placeholder,
        });
      }
    }
  }

  function alterarAtributo() {
    !valido &&
      setAtributos({
        valido: !valido,
        placeholder,
      });
  }

  return (
    <CampoDeInput valido={atributos.valido}>
      <label className={classeCSS} htmlFor={id}>
        {textoDoLabel}
      </label>
      <input
        onFocus={() => alterarAtributo()}
        onChange={(e) => atualizarValorDoInput(e.target.value)}
        type={tipo}
        name={id}
        id={id}
        value={stateValor}
        placeholder={
          valido ? atributos.placeholder : 'Preencha este campo corretamente!'
        }
      />
    </CampoDeInput>
  );
}
