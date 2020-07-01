/* eslint-disable no-restricted-globals */
// A regra acima é temporária até usar um formulário do sistema ao invés de usar o prompt do browser.
import { store } from '../store';
import request from '../store/modules/data/actions';
import { acao } from '../store/modules/componentes/actions';

import { $, $id, $toggle, $toggleMulti } from './dom.func';

export function doNotSubmit() {
  return (e) => {
    e.preventDefault();
  };
}

export function getOptions() {
  store.dispatch(
    acao('FORM', 'card', 'TESTE', { path: 'genres', by: 'genre' })
  );
}

export function marcarTodas(
  linhas,
  setLinhas,
  todasMarcadas,
  setTodosMarcados
) {
  // Se, ao clicar, o estado de "todasMarcadas" era "false", então:
  if (!todasMarcadas) {
    // 1. Marcar todos as linhas definindo a propriedade "checked" de cada um para "true";
    linhas.forEach((linha) => (linha.checked = true));

    // 2. Pegar o nome de todas as linhas para colocá-las no state "quantosMarcados";
    //const nomesDasLinhas = linhas.map((linha) => linha.nome);

    const novoState = linhas.map((linha) => {
      const { id, nome, colunas } = linha;
      return { id, nome, checked: true, colunas };
    });
    setLinhas(novoState);
    //console.log("novoState :", novoState);

    // 3. Atualizar o state "quantosMarcados":
    //setCheckboxesMarcados(nomesDasLinhas);
  }
  // Se não, se ao clicar, o estado de "todasMarcadas" era "true":
  else {
    // 1. Desmarcar todos os linhas definindo a propriedade "checked" de cada um para false";
    linhas.forEach((linha) => (linha.checked = false));

    // 2. Esvaziar a array do state "quantosMarcados"
    //setCheckboxesMarcados([]);
  }

  // Inverter o state do checkbox que marca todos:
  setTodosMarcados(!todasMarcadas);
}

export function marcarCheckbox(
  event,
  linhas,
  quantosMarcados,
  setCheckboxesMarcados
) {
  // Se, ao clicar na checkbox, a linha já estava marcada:
  if (quantosMarcados.includes(event.target.name)) {
    // 1. Atualizar o state "quantosMarcados" removendo da array a linha desmarcada;
    setCheckboxesMarcados(
      quantosMarcados.filter((checkbox) => checkbox !== event.target.name)
    );

    // 2. Localizar dentro do objeto "linhas" aquela que tem o nome da linha clicada...
    const linhaMarcada = linhas.find(
      (linha) => linha.nome === event.target.name
    );

    // 3. ...e alterar a sua propriedade "checked" para "false"
    linhaMarcada.checked = false;
  }

  // Se não, se ao clicar na checkbox, a linha não estava marcada:
  else {
    // 1. Atualizar o state "quantosMarcados" adicionando na array a linha marcada;
    setCheckboxesMarcados([...quantosMarcados, event.target.name]);

    // 2. Localizar dentro do objeto "linhas" aquela que tem o nome da linha clicada...
    const linhaMarcada = linhas.find(
      (linha) => linha.nome === event.target.name
    );

    // 3. ...e alterar a sua propriedade "checked" para "true".
    linhaMarcada.checked = true;
  }
}

export function botao(operacao, linhas) {
  const quantosMarcados = linhas.filter((linha) => linha.checked === true);

  if (operacao === 'Editar' && quantosMarcados.length !== 1) {
    const somente = quantosMarcados.length > 1 ? 'somente' : '';
    return alert(`Marque ${somente} uma linha para editar.`);
  }

  const nomeDaLinha =
    operacao === 'Editar' && quantosMarcados[0]
      ? `"${quantosMarcados[0].colunas[0][1]}"`
      : '';

  // "const valor" É O DADO QUE VOCÊ ENVIARÁ À API
  const valor = prompt(`${operacao} linha ${nomeDaLinha}`);

  !!valor && console.log(valor);
}

export function excluirLinha(linhas) {
  let quantosMarcados = [];

  linhas.forEach((linha) => {
    const nome = linha.colunas[0][1];
    if (linha.checked === true) quantosMarcados = [...quantosMarcados, nome];
  });

  const s = quantosMarcados.length > 1 ? 's' : ''; // Palavra no singular ou no plural

  if (quantosMarcados.length === 0) {
    return alert('Selecione pelo menos uma linha para excluir.');
  } else if (quantosMarcados.length === linhas.length) {
    return confirm(`Excluir todas as linhas?`);
  } else {
    return confirm(
      `Excluir a${s} linha${s}:\r\n${quantosMarcados.join('\r\n')}`
    );
  }
}

// FUNÇÕES DA EDIÇÃO RÁPIDA ========================================================================
export function editarLinha(e, icone, linhas, setLinhas) {
  const { id, value } = e.target;

  const [, qualID, estaColuna, source] = id.split('_');
  const numeroId = parseFloat(qualID);

  const erro = $id(`erro_${qualID}_${estaColuna}_${source}`);
  const qualIcone = $id(`${icone}_${qualID}_${estaColuna}_${source}`);

  // Avisar que é inválido se tiver menos do que quatro letras (exceto para novas linhas, id=0):
  if (numeroId > 0 && value.length < 4) {
    $toggle(erro, 'inline-flex');
    $toggle(qualIcone, 'none');

    e.target.className = '';
    e.target.className = 'invalido';
    e.target.placeholder = 'Editar';
  } else {
    $toggle(erro, 'none');
    $toggle(qualIcone, 'inline-flex');

    e.target.className = '';
    e.target.className = 'valido';
  }

  const estaLinha = linhas.find((linha) => linha.id === numeroId);

  const colunasAtualizadas = estaLinha.colunas.map((coluna) => {
    let [titulo, dado] = coluna;

    coluna = titulo === estaColuna ? [titulo, value] : [titulo, dado];
    return coluna;
  });

  const novoState = linhas.map((linha) => {
    if (linha.id === numeroId) {
      linha = {
        checked: estaLinha.checked,
        id: estaLinha.id,
        nome: value,
        colunas: colunasAtualizadas,
      };
    }
    return linha;
  });

  setLinhas(novoState);
}

export async function salvar(acao, identificacao, path, e) {
  const [id, coluna, source] = identificacao.split('_');

  const input = $id(`input_${identificacao}`);
  const valor =
    acao === 'CREATE' ? $(`#input_${identificacao}`).value : input.value;

  const spinner = $id(`spinner_${identificacao}`);
  const erro = $id(`erro_${identificacao}`);
  const save = $id(`save_${identificacao}`);
  const undo = $id(`undo_${identificacao}`);

  $toggle(erro, 'none');
  $toggle(save, 'inline-flex');

  input.className = '';
  input.className = 'valido';

  // Salvar se o evento for do tipo 'click' ou a tecla 'Enter' for pressionada,...
  // ...e o valor do input tiver no mínimo 4 letras.
  if ((e.type === 'click' || e.key === 'Enter') && valor.length >= 4) {
    // Mostrar o spinner e esconder os ícones "save" e undo:
    $toggleMulti([save, undo, erro], 'none');
    $toggle(spinner, 'inline-flex');

    // Texto inicial do placeholder:
    input.placeholder = 'Criar';

    // setTimeout pra simular um tempo resposta da API
    setTimeout(async () => {
      // Despachar os dados atualizados depois de dois segundos:
      await store.dispatch(
        request(acao, source, path, { id, colunas: [coluna], valores: [valor] })
      );
    }, 2000);
  } else {
    $toggle(erro, 'inline-flex');
    $toggle(save, 'none');

    input.className = '';
    input.className = 'invalido';
    input.placeholder = 'O nome deve ter no mínimo 4 letras!';
  }
}

export async function ouCriarOuProcurar(
  identificacao,
  icone,
  setPagina,
  path,
  e
) {
  const [, coluna, source] = identificacao.split('_');
  const valor = $(`#input_${identificacao}`).value;

  switch (icone) {
    case 'save':
      salvar('CREATE', identificacao, path, e);
      break;
    case 'search':
      store.dispatch(
        request('READ', source, path, { valor, coluna, by: coluna })
      );
      setPagina(1);
      $(`#tbody_${source}`).scrollTo(0, 0); // Garantir que o scroll da tabela volte ao topo.
      break;
    default:
      return;
  }
}

export async function confirmarExcluir(identificacao, path) {
  const [id, , source] = identificacao.split('_');

  const spinner = $id(`spinner_${identificacao}`);
  const desfazer = $id(`undo_${identificacao}`);
  const excluir = $id(`delete_${identificacao}`);

  // Esconder os ícones "undo" e 'delete':
  $toggleMulti([desfazer, excluir], 'none');

  // Mostrar o spinner
  $toggle(spinner, 'inline-flex');

  // Despachar os dados atualizados depois de dois segundos (SIMULANDO TEMPO DE RESPOSTA DA API):
  setTimeout(async () => {
    await store.dispatch(request('DELETE', source, path, id));
  }, 2000);
}
