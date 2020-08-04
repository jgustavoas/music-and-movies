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
      case 'FORM:OPTIONS': {
        const { titulo, data } = action.payload;
        draft.card = { ...state.card };
        draft.form = {
          fill: state.form.fill,
          options: { ...state.form.options, [titulo]: [...data[titulo]] },
          ready: false,
        };
        break;
      }
      case 'FORM:FILL': {
        const { id, value } = action.payload.data;
        const { fields, ...rest } = state.form.fill;
        const changed = fields.map((field, index) => {
          if (index === parseFloat(id)) return [field[0], value, field[2]];
          else return field;
        });

        draft.card = { ...state.card };
        draft.form = {
          fill: { fields: changed, ...rest },
          options: { ...state.form.options },
          ready: state.form.ready,
        };
        break;
      }
      case 'FORM:READY': {
        draft.card = { ...state.card };
        draft.form = {
          fill: state.form.fill,
          options: { ...state.form.options },
          ready: true,
        };
        break;
      }
      default: // O default desta condicional de switch() não precisa retornar algo
    }
  });
}
