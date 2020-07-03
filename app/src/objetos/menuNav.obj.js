import { columns } from './columns.obj';
class NavItens {
  constructor(titulo, subitens) {
    this.titulo = titulo;
    this.subitens = subitens;
  }
}

const subs = {
  artists: {
    new: {
      titulo: 'New Artist/Band',
      tipo: 'card',
      path: null,
      columns: columns.artists,
    },
    list: {
      titulo: 'List of Artists & Bands',
      tipo: 'page',
      path: 'artists',
      columns: columns.artists,
    },
    search: {
      titulo: 'Search Artist & Band',
      tipo: 'card',
      path: null,
      columns: columns.artists,
    },
  },
  albums: {
    new: {
      titulo: 'New album',
      tipo: 'card',
      path: null,
      columns: columns.albums,
    },
    list: {
      titulo: 'List of albums',
      tipo: 'page',
      path: 'albums',
      columns: columns.albums,
    },
    search: {
      titulo: 'Search album',
      tipo: 'card',
      path: null,
      columns: columns.albums,
    },
  },
  tracks: {
    new: {
      titulo: 'New track',
      tipo: 'card',
      path: null,
      columns: columns.tracks,
    },
    list: {
      titulo: 'List of tracks',
      tipo: 'page',
      path: 'tracks',
      columns: columns.tracks,
    },
    search: {
      titulo: 'Search track',
      tipo: 'card',
      path: null,
      columns: columns.tracks,
    },
  },
  composers: {
    new: {
      titulo: 'New composer',
      path: null,
    },
    list: {
      titulo: 'List of composers',
      tipo: 'page',
      path: 'composers',
      columns: columns.composers,
    },
    search: {
      titulo: 'Search composer',
      path: null,
    },
  },
  performers: {
    new: {
      titulo: 'New performer',
      path: null,
    },
    list: {
      titulo: 'List of performer',
      tipo: 'page',
      path: 'performers',
      columns: columns.performer,
    },
    search: {
      titulo: 'Search performer',
      path: null,
    },
  },
  movies: {
    new: {
      titulo: 'New movie',
      path: null,
    },
    list: {
      titulo: 'List of movies',
      tipo: 'page',
      path: 'movies',
      columns: columns.movies,
    },
    search: {
      titulo: 'Search movies',
      path: null,
    },
  },
  genres: {
    new: {
      titulo: 'New genre',
      tipo: 'card',
      path: null,
      columns: columns.genres,
    },
    list: {
      titulo: 'List of genres',
      tipo: 'page',
      path: 'genres',
      columns: columns.genres,
    },
    search: {
      titulo: 'Search genre',
      tipo: 'card',
      path: null,
      columns: columns.genres,
    },
  },
};

const artists = new NavItens('Artists & Bands', subs.artists);
const albums = new NavItens('Albums', subs.albums);
const tracks = new NavItens('Tracks', subs.tracks);
const composers = new NavItens('Composers', subs.composers);
const performers = new NavItens('Performers', subs.performers);
const movies = new NavItens('Movies', subs.movies);
const genres = new NavItens('Genres', subs.genres);

export const ItensDoMenu = {
  artists,
  albums,
  tracks,
  composers,
  performers,
  movies,
  genres,
};
