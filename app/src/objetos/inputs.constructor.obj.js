import React from 'react';

import { Input as Component, Select as Sel } from '../styles/Input.style';

import { keyEvent, getOptions } from '../functions/form.func';

export class Input {
  constructor(name, type = 'text') {
    this.name = name;
    this.type = type;
  }

  construct(isValid, model) {
    const fn = () => {
      return model ? getOptions(model) : null;
    };

    return (
      <Component
        onChange={fn}
        list={this.name}
        name={this.name}
        type={this.type}
        isValid={isValid}
        onKeyDown={keyEvent}
      />
    );
  }
}

export class Datalist extends Input {
  constructor(name, list) {
    super(name);
    this.list = list;
  }

  construct(isValid) {
    const textInput = super.construct(isValid, this.list.model);

    return (
      <>
        {textInput}
        <datalist id={this.name}>
          {this.list.data.map((option, index) => {
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
  constructor(name, options) {
    this.name = name;
    this.options = options;
  }

  construct(isValid) {
    return (
      <Sel isValid={isValid} name={this.name} id={this.name}>
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
