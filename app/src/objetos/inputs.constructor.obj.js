import React from 'react';
import { Input as Component, Select as Sel } from '../styles/Input.style';
import { keyEvent, fnOnChange, fnOnFocus } from '../functions/form.func';

export class Input {
  constructor({ field, value, isValid }) {
    this.name = field.name;
    this.type = field.type;
    this.value = value.textValue;
    this.isValid = isValid;
  }

  construct(model) {
    return (
      <Component
        list={this.name} // for Datalist that extends this Input
        name={this.name}
        type={this.type}
        placeholder={this.value}
        isValid={this.isValid}
        data-unfocused='yes'
        onFocus={(e) => fnOnFocus(e, this.value)}
        onChange={(e) => fnOnChange(e, model)}
        onKeyDown={keyEvent}
      />
    );
  }
}

export class Datalist extends Input {
  constructor({ field, value, list, isValid }) {
    super({ field, value, isValid });
    this.list = list;
  }

  construct() {
    const textInput = super.construct(this.list.model);
    const { data } = this.list;

    return (
      <>
        {textInput}
        <datalist id={this.name}>
          {data &&
            data.map((option, index) => {
              return (
                <option
                  id={option.id}
                  key={index}
                  value={option[this.name.slice(0, -2)]}
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
        {this.list.data.map((option, index) => {
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
