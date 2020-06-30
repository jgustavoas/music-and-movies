export const ItensDoMenu = {
  artists: {
    titulo: 'Artists & Bands',
    subitens: {
      new: {
        titulo: 'New Artist/Band',
        tipo: 'card',
        path: null,
      },
      list: {
        titulo: 'List of Artists & Bands',
        tipo: 'page',
        path: 'artists',
        columns: [
          ['Artist', 'artist'],
          ['Album', 'albumId'],
          ['Genre', 'genreId'],
        ],
      },
      search: {
        titulo: 'Search Artist & Band',
        path: null,
      },
    },
  },
  albums: {
    titulo: 'Albums',
    subitens: {
      new: {
        titulo: 'New album',
        path: null,
      },
      list: {
        titulo: 'List of albums',
        tipo: 'page',
        path: 'albums',
        columns: [
          ['Album', 'album'],
          ['Artist', 'artistId'],
          ['Genre', 'genreId'],
        ],
      },
      search: {
        titulo: 'Search album',
        path: null,
      },
    },
  },
  tracks: {
    titulo: 'Tracks',
    subitens: {
      new: {
        titulo: 'New track',
        path: null,
      },
      list: {
        titulo: 'List of tracks',
        tipo: 'page',
        path: 'tracks',
        columns: [
          ['Track', 'track'],
          ['Album', 'albumId'],
          ['Artist', 'artistId'],
          ['Genre', 'genreId'],
        ],
      },
      search: {
        titulo: 'Search track',
        path: null,
      },
    },
  },
  composers: {
    titulo: 'Composers',
    subitens: {
      new: {
        titulo: 'New composer',
        path: null,
      },
      list: {
        titulo: 'List of composers',
        path: null,
      },
      search: {
        titulo: 'Search composer',
        path: null,
      },
    },
  },
  movies: {
    titulo: 'Movies',
    subitens: {
      new: {
        titulo: 'New movie',
        path: null,
      },
      list: {
        titulo: 'List of movies',
        path: null,
      },
      search: {
        titulo: 'Search movies',
        path: null,
      },
    },
  },
  genres: {
    titulo: 'Genres',
    subitens: {
      new: {
        titulo: 'New genre',
        path: null,
      },
      list: {
        titulo: 'List of genres',
        tipo: 'page',
        path: 'genres',
        columns: [['Genre', 'genre']],
      },
      search: {
        titulo: 'Search genre',
        path: null,
      },
    },
  },
};

/* PARA TESTE NA CRIAÇÃO DE MENU DE MULTINÍVEL INFINITO:
class itemDeMenu {
  constructor(titulo, subitens, tipo, model) {
    this.titulo = titulo;
    this.tipo = tipo;
    this.model = model;
    this.subitens = subitens ? this.render(subitens) : null;
  }

  render(itens) {
    let subitens = {};

    itens.forEach((item, indice) => {
      const { titulo, tipo, model } = item;
      const { name, columns } = model ? model : {};
      const subitem = { titulo, tipo, path: name, columns };

      subitens = { ...subitens, [`subitem${indice + 1}`]: subitem };
    });

    return { ...subitens };
  }
*/
