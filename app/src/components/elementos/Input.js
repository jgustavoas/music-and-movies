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
        <option value='none'>Select one...</option>
        {this.options.map((option, index) => {
          return (
            <option key={index} value={option.id}>
              {option.genre}
            </option>
          );
        })}
      </select>
    );
  },
};

export default function Componente({ settings }) {
  const [label, name, type, isValid, options] = settings;

  if (options) input.options = options;

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      {input[type](name, isValid)}
    </section>
  );
}
