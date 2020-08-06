import React from 'react';
import { Input as Component, Select as Sel } from '../styles/Input.style';
import { keyEvent, fnOnChange } from '../functions/form.func';

export class Input {
  constructor({ field, value, setState, isValid }) {
    this.field = field;
    this.value = value.textValue;
    this.setState = setState;
    this.isValid = isValid;
  }

  construct() {
    const { name, type } = this.field;

    return (
      <Component
        id={name}
        name={name}
        type={type}
        list={`${name}_list`} // for Datalist that extends this Input
        isValid={this.isValid}
        value={this.value}
        onChange={(e) => fnOnChange(e, this.field, this.setState)}
        onKeyDown={keyEvent}
      />
    );
  }
}

export class Datalist extends Input {
  constructor({ field, value, list, setState, isValid }) {
    super({ field, value, setState, isValid });
    this.list = list;
  }

  construct() {
    const textInput = super.construct();
    const { name } = this.field;

    return (
      <>
        {textInput}
        <datalist id={`${name}_list`}>
          {this.list.map((option, index) => {
            return (
              <option
                id={option.id}
                key={index}
                value={option[name.slice(0, -2)]}
              />
            );
          })}
        </datalist>
      </>
    );
  }
}

export class Select {
  constructor({ field, value, list, isValid }) {
    this.name = field.name;
    this.value = value.idValue;
    this.list = list;
    this.isValid = isValid;
  }

  construct() {
    return (
      <Sel
        isValid={this.isValid}
        name={this.name}
        id={this.name}
        defaultValue={this.value}
      >
        <option value='none'>Select one...</option>
        {this.list.map((option, index) => {
          return (
            <option key={index} value={option.id}>
              {option.genre}
            </option>
          );
        })}
      </Sel>
    );
  }
}
