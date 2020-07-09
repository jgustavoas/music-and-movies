import Menu from './constructor.obj';

const itens = [
  { artists: 'Artists & Bands' },
  { albums: 'Albums' },
  { tracks: 'Tracks' },
  { movies: 'Movies' },
  { genres: 'Genres' },
];
const subitens = ['New', 'List', 'Search'];

export const ItensDoMenu = new Menu(itens, subitens).construct();
