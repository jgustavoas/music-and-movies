import React from 'react';
import { Input } from '../../styles/Input.style';
import { keyEvent } from '../../functions/form.func';

const input = {
  text(name, isValid) {
    return (
      <Input
        isValid={isValid}
        onKeyDown={keyEvent}
        type='text'
        name={name}
        id={name}
      />
    );
  },
  password(name, isValid) {
    return (
      <Input
        isValid={isValid}
        onKeyDown={keyEvent}
        type='password'
        name={name}
        id={name}
      />
    );
  },
  autocomplete(name, isValid) {
    return (
      <Input
        isValid={isValid}
        onKeyDown={keyEvent}
        type='text'
        name={name}
        id={name}
      />
    );
  },
  select(name) {
    return (
      <select name={name} id={name}>
        <option value=''>Select one...</option>
        {this.options.map((option, index) => {
          return (
            <option key={index} value={index}>
              {option.genre}
            </option>
          );
        })}
      </select>
    );
  },
};

export default function Componente({ settings }) {
  const [label, type, isValid, options] = settings;
  const name = label.toLowerCase().replace(/\s/g, '');

  if (options) input.options = options;

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      {input[type](name, isValid)}
    </section>
  );
}
