import React from 'react';
import { Input as Component, Select as Sel } from '../styles/Input.style';
import { keyEvent, getOptions } from '../functions/form.func';

export class Input {
  constructor(name, { textValue }, type = 'text') {
    this.name = name;
    this.value = textValue;
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
        placeholder={this.value}
        isValid={isValid}
        onKeyDown={keyEvent}
        onFocus={(e) => {
          if (e.target.value === '' && this.value) {
            e.target.value = this.value;
            e.target.placeholder = '';
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
