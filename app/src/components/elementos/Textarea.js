import React from 'react';
import { Textarea } from '../../styles/Textarea.style';

export default function Componente(props) {
  const { id, textoDoLabel, linhas, classeCSS } = props;

  return (
    <Textarea>
      <label className={classeCSS} htmlFor={id}>
        {textoDoLabel}
      </label>
      <textarea rows={linhas}></textarea>
    </Textarea>
  );
}
