import React from 'react';
import { keyEvent } from '../../functions/form.func';

const input = {
  text: function (name) {
    return <input onKeyDown={keyEvent} type='text' name={name} id={name} />;
  },
  autocomplete: function (name) {
    return <input onKeyDown={keyEvent} type='text' name={name} id={name} />;
  },
  select: function (name) {
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
  const [labelField, nameField, type, options] = settings;
  input.options = options;

  return (
    <section>
      <label htmlFor={nameField}>{labelField}</label>
      {input[type](nameField)}
    </section>
  );
}
