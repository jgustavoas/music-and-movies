import React, { useState, useEffect } from 'react';
import { store } from '../../store';

import { Input } from '../../styles/Input.style';
import { keyEvent, getOptions } from '../../functions/form.func';

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
  datalist(name, isValid, list) {
    return (
      <>
        <Input
          onChange={() => getOptions('artists')}
          list={name}
          name={name}
          isValid={isValid}
          onKeyDown={keyEvent}
        />
        <datalist id={name}>
          {list.map((option, index) => {
            return <option key={index} value={option.artist} />;
          })}
        </datalist>
      </>
    );
  },
  select(name, isValid, options) {
    return (
      <select name={name} id={name}>
        <option value='none'>Select one...</option>
        {options.map((option, index) => {
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

  const artistList = store.getState().componentes.form.options.artists;
  const [artists, setArtist] = useState([]);

  const list = type === 'datalist' ? artists : options.genres;

  useEffect(() => {
    artistList && setArtist(artistList);
  }, [artistList]);

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      {input[type](name, isValid, list)}
    </section>
  );
}
