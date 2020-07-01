// REDUX ===========================================================================================
import { store } from '../store';
import { acao } from '../store/modules/componentes/actions';
import request from '../store/modules/data/actions';

export async function abrirCard(props) {
  // Sempre reiniciar o state antes de abrir um novo card caso outro card ainda esteja aberto:
  await store.dispatch(request('RESET', 'card'));
  await store.dispatch(acao('ABRIR', props.id, props.title));
}

export function fecharCard() {
  store.dispatch(acao('FECHAR'));
  store.dispatch(request('RESET', 'card'));
}
