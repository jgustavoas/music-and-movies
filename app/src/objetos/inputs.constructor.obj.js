import React from 'react';
import { Input as Component, Select as Sel } from '../styles/Input.style';
import { keyEvent, getOptions } from '../functions/form.func';
import { store } from '../store';

export class Input {
  constructor(name, { textValue }, type = 'text') {
    this.name = name;
    this.value = textValue;
    this.type = type;
  }

  construct(isValid, model) {
    const options = store.getState().componentes.form.options[model];
    const fn = ({ target }) => {
      return model && !options && target.value !== ''
        ? getOptions(model)
        : null;
    };

    return (
      <Component
        onChange={fn}
        list={this.name} // for Datalist that extends this Input
        name={this.name}
        type={this.type}
        placeholder={this.value}
        isValid={isValid}
        onKeyDown={keyEvent}
        data-unfocused='yes'
        onFocus={({ target }) => {
          const conditional =
            target.dataset.unfocused && target.value === '' && this.value;

          if (conditional) {
            target.value = this.value;
            target.placeholder = '';
            delete target.dataset.unfocused;
          }
        }}
      />
    );
  }
}

export class Datalist extends Input {
  constructor(name, value, list) {
    super(name, value);
    this.list = list;
  }

  construct(isValid) {
    const textInput = super.construct(isValid, this.list.model);
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
  constructor(name, { idValue }, options) {
    this.name = name;
    this.value = idValue;
    this.options = options;
  }

  construct(isValid) {
    return (
      <Sel
        isValid={isValid}
        name={this.name}
        id={this.name}
        defaultValue={this.value}
      >
        <option value='none'>Select one...</option>
        {this.options.map((option, index) => {
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
