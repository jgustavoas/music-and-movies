export const ItensDoMenu = {
  item1: {
    titulo: 'Artists & Bands',
    subitens: {
      subitem1: {
        titulo: 'New Artist/Band',
        tipo: 'card',
        path: null,
      },
      subitem2: {
        titulo: 'List of Artists & Bands',
        tipo: 'page',
        path: 'artists',
        columns: [
          ['Artist', 'artist'],
          ['Album', 'albumId'],
          ['Genre', 'genreId'],
        ],
      },
      subitem3: {
        titulo: 'Search Artist & Band',
        path: null,
      },
    },
  },
  item2: {
    titulo: 'Albums',
    subitens: {
      subitem1: {
        titulo: 'New album',
        path: null,
      },
      subitem2: {
        titulo: 'List of albums',
        tipo: 'page',
        path: 'albums',
        columns: [
          ['Album', 'album'],
          ['Artist', 'artistId'],
          ['Genre', 'genreId'],
        ],
      },
      subitem3: {
        titulo: 'Search album',
        path: null,
      },
    },
  },
  item3: {
    titulo: 'Songs',
    subitens: {
      subitem1: {
        titulo: 'New song',
        path: null,
      },
      subitem2: {
        titulo: 'List of songs',
        tipo: 'page',
        path: 'tracks',
        columns: [
          ['Track', 'track'],
          ['Album', 'albumId'],
          ['Artist', 'artistId'],
          ['Genre', 'genreId'],
        ],
      },
      subitem3: {
        titulo: 'Search song',
        path: null,
      },
    },
  },
  item4: {
    titulo: 'Composers',
    subitens: {
      subitem1: {
        titulo: 'New composer',
        path: null,
      },
      subitem2: {
        titulo: 'List of composers',
        path: null,
      },
      subitem3: {
        titulo: 'Search composer',
        path: null,
      },
    },
  },
  item5: {
    titulo: 'Movies',
    subitens: {
      subitem1: {
        titulo: 'New movie',
        path: null,
      },
      subitem2: {
        titulo: 'List of movies',
        path: null,
      },
      subitem3: {
        titulo: 'Search movies',
        path: null,
      },
    },
  },
  item6: {
    titulo: 'Genres',
    subitens: {
      subitem1: {
        titulo: 'New genre',
        path: null,
      },
      subitem2: {
        titulo: 'List of genres',
        tipo: 'page',
        path: 'genres',
        columns: [['Genre', 'genre']],
      },
      subitem3: {
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
