import { ItensDoMenu } from './menuNav.obj';

export const initialState = {
  card: {
    path: undefined,
    settings: {
      titulo: undefined,
      tipo: undefined,
      model: undefined,
      columns: [],
    },
    data: undefined,
    error: false,
    query: {
      nome: '',
      sortASC: true,
      pagina: 1,
      start: '0',
      limit: '10',
    },
  },
  pagina: {
    path: '/artists',
    settings: ItensDoMenu.item1.subitens.subitem2,
    loaded: false,
    data: undefined,
    error: false,
    query: {
      nome: '',
      sortASC: true,
      pagina: 1,
      start: '0',
      limit: '50',
    },
  },
};
