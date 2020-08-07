import React from 'react';
import { input } from '../../objetos/inputs.obj';

export default function Componente(field, index) {
  const [label, name, type] = field;
  const { fill } = this.state;
  const [, textValue, idValue] = fill ? fill.fields[index] : [];
  const models = { albumId: 'albums', artistId: 'artists', genreId: 'genres' };

  const settings = {
    field: { index, name, type },
    value: { textValue, idValue },
    state: this.state,
    list: this.options[models[name]],
    isValid: true,
  };

  return (
    <section key={index}>
      <label htmlFor={name}>{label}</label>
      {input[type](settings)}
    </section>
  );
}

export function Login(props) {
  const [label, name, isValid] = props.settings;
  const type = name;
  const settings = { field: { name, type }, value: {}, isValid };

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      {input[type](settings)}
    </section>
  );
}
