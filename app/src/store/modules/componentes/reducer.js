import produce from 'immer';

export const INITIAL_STATE = {
  card: {
    id: undefined,
    titulo: undefined,
    data: undefined,
    propriedadeDisplay: 'none',
    visibilidade: 'collapse',
  },
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
        draft.card = {
          id: action.payload.id,
          titulo: action.payload.titulo,
          data: state.card.data,
          propriedadeDisplay: 'flex',
          visibilidade: 'visible',
        };
        draft.form = {
          fill: action.payload.data,
          options: state.form.options,
          ready: state.form.ready,
        };
        break;
      }
      case 'FECHAR': {
        draft.card = {
          id: undefined,
          titulo: undefined,
          data: undefined,
          propriedadeDisplay: 'none',
          visibilidade: 'collapse',
        };
        draft.form = {
          fill: null,
          options: undefined,
          ready: false,
        };
        break;
      }
      case 'FORM:READY': {
        const { titulo, data } = action.payload;
        draft.card = { ...state.card };
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
