import { store } from '../store';
import request from '../store/modules/data/actions';
import { acao } from '../store/modules/componentes/actions';

import history from '../services/history';

export function getOptions() {
  store.dispatch(
    acao('FORM', 'card', 'TESTE', { path: 'genres', by: 'genre' })
  );
}

export const go = (e) => {
  const { card, titulo } = store.getState().componentes;

  const wichOne = titulo.includes('New') ? 'Create' : 'Search';
  const path = card.split('/')[0];

  const { name, value } = e.target.form[0];

  if (wichOne === 'Search') history.push(`${path}?val=${value}`);
  else store.dispatch(request('CREATE', 'card', path, { [name]: value }));
};

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
