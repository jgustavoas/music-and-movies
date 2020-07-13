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
  datalist(name, isValid, list) {
    return (
      <>
        <Input
          onChange={(e) => {
            getOptions(list.model);
          }}
          list={name}
          name={name}
          isValid={isValid}
          onKeyDown={keyEvent}
        />
        <datalist id={name}>
          {list.data.map((option, index) => {
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

  const artistsList = store.getState().componentes.form.options.artists;
  const albumsList = store.getState().componentes.form.options.albums;

  const [artists, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);

  const datalist = {
    albumId: {
      model: 'albums',
      data: albums,
    },
    artistId: {
      model: 'artists',
      data: artists,
    },
  };

  const list = type === 'datalist' ? datalist[name] : options.genres;

  useEffect(() => {
    albumsList && setAlbums(albumsList);
    artistsList && setArtist(artistsList);
  }, [albumsList, artistsList]);

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      {input[type](name, isValid, list)}
    </section>
  );
}
