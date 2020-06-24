import produce from 'immer';

export const INITIAL_STATE = {
  card: undefined,
  titulo: undefined,
  propriedadeDisplay: 'none',
  visibilidade: 'collapse',
};

export default function components(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ABRIR': {
        draft.card = action.payload.item;
        draft.titulo = action.payload.titulo;
        draft.propriedadeDisplay = 'grid';
        draft.visibilidade = 'visible';
        break;
      }
      case 'FECHAR': {
        draft.card = null;
        draft.titulo = null;
        draft.visibilidade = 'collapse';
        break;
      }
      default: // O default desta condicional de switch() não precisa retornar algo
    }
  });
}
