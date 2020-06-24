// REDUX ===========================================================================================
import { store } from '../store';
import { acao } from '../store/modules/componentes/actions';
import request from '../store/modules/data/actions';

// OBJETOS =========================================================================================
import { ItensDoMenu as Nav } from '../objetos/menuNav.obj';
import { ItensDoMenu as User } from '../objetos/menuUser.obj';

const ItensDoMenu = { ...Nav, ...User };

export async function abrirCard(props) {
  // Sempre reiniciar o state antes de abrir um novo card caso outro card ainda esteja aberto:
  await store.dispatch(request('RESET', 'card'));

  await store.dispatch(acao('ABRIR', props.id, props.title));

  // Obter a coluna principal na tabela do banco de dados relacionada ao card:
  const [item, esteCard] = props.id.split('/');
  const coluna = ItensDoMenu[item].subitens[esteCard].colunaPrincipal;

  // Despachar ação 'READ' para obter os dados na API ordenando pela coluna obtida (se esta for definida):
  coluna &&
    (await store.dispatch(request('READ', 'card', props.id, { by: coluna })));
}

export function fecharCard() {
  store.dispatch(acao('FECHAR'));
  store.dispatch(request('RESET', 'card'));
}
