import React from 'react';
import { input } from '../../objetos/inputs.obj';

export default function Componente(field, index) {
  const [label, name, type] = field;
  const { formData, options } = this;
  const [, textValue, idValue] = formData ? formData.colunas[index] : [];
  const value = formData ? { textValue, idValue } : '';

  const models = { albumId: 'albums', artistId: 'artists' };
  const data = options[models[name]];

  const list =
    type === 'datalist' ? { model: models[name], data } : options.genres;

  return (
    <section key={index}>
      <label htmlFor={name}>{label}</label>
      {input[type](name, value, true, list)}
    </section>
  );
}

export function Login({ settings }) {
  const [label, name, isValid] = settings;
  const type = name;

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      {input[type](name, isValid)}
    </section>
  );
}
