import React, { useState, useEffect } from 'react';
import { store } from '../../store';

import { input } from '../../objetos/inputs.obj';

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

export function Login({ settings }) {
  const [label, name, isValid] = settings;
  const type = name;

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      {input[type](name, isValid)}
    </section>
  );
}
