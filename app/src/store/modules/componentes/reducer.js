import produce from 'immer';

export const INITIAL_STATE = {
  card: undefined,
  titulo: undefined,
  propriedadeDisplay: 'none',
  visibilidade: 'collapse',
  form: {
    fill: null,
    options: {},
    ready: false,
  },
};

export default function components(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ABRIR': {
        draft.card = action.payload.id;
        draft.titulo = action.payload.titulo;
        draft.propriedadeDisplay = 'grid';
        draft.visibilidade = 'visible';
        draft.form = {
          fill: action.payload.data,
          options: undefined,
          ready: false,
        };
        break;
      }
      case 'FECHAR': {
        draft.card = null;
        draft.titulo = null;
        draft.propriedadeDisplay = 'none';
        draft.visibilidade = 'collapse';
        draft.form = {
          fill: null,
          options: undefined,
          ready: false,
        };
        break;
      }
      case 'FORM:READY': {
        const { titulo, data } = action.payload;
        draft.form = {
          fill: state.form.fill,
          options: { ...state.form.options, [titulo]: [...data[titulo]] },
          ready: true,
        };
        break;
      }
      default: // O default desta condicional de switch() não precisa retornar algo
    }
  });
}
