import { columns } from './columns.obj';

export const ItensDoMenu = {
  artists: {
    titulo: 'Artists & Bands',
    subitens: {
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
  },
  albums: {
    titulo: 'Albums',
    subitens: {
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
  },
  tracks: {
    titulo: 'Tracks',
    subitens: {
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
  },
};
