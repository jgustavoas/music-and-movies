import NavItem from './constructor.obj';

const itens = [
  { title: 'Artists & Bands', model: 'artists' },
  { title: 'Albums', model: 'albums' },
  { title: 'Tracks', model: 'tracks' },
  { title: 'Composers', model: 'composers' },
  { title: 'Performers', model: 'performers' },
  { title: 'Movies', model: 'movies' },
  { title: 'Genres', model: 'genres' },
];
const subitens = ['New', 'List', 'Search'];

const allItens = {};

itens.forEach((item) => {
  const { title, model } = item;
  allItens[model] = new NavItem(title, subitens, model).render();
});

export const ItensDoMenu = { ...allItens };
