import produce from 'immer';
import { initialState } from '../../../objetos/initialStates.obj';

export default function data(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'LOAD': {
        const { source, data } = action.payload;
        draft[source].loaded = data.loaded;
        break;
      }
      case 'READ:SUCCESS': {
        const { source, path, data } = action.payload;
        const { linhas, settings } = data;

        draft[source] = {
          path,
          settings: { ...settings },
          data: [...linhas],
          loaded: false,
          error: false,
          query: state[source].query,
        };
        break;
      }
      case 'READ:FAIL': {
        draft.CRUD_error = true;
        draft.CRUD_data = undefined;
        break;
      }
      case 'PROCURAR': {
        draft.query = {
          nome: action.payload.data.nome,
          sortASC: state.query.sortASC,
          start: state.query.start,
          limit: state.query.limit,
        };
        break;
      }
      case 'SORT': {
        const { source } = action.payload;
        draft[source].data = [...state[source].data].reverse();
        draft[source].query.pagina = 1;
        break;
      }
      case 'LIMITAR': {
        const { source, data } = action.payload;

        draft[source].query = {
          nome: state[source].query.nome,
          sortASC: state[source].query.sortASC,
          start: state[source].query.start,
          limit: data.limit,
        };
        break;
      }
      case 'PAGINAR': {
        const { source, data } = action.payload;
        draft[source].query.pagina = data.pagina;
        break;
      }
      case 'RESET': {
        const { source } = action.payload;
        draft[source] = { ...initialState[source] };
        break;
      }
      default:
    }
  });
}
