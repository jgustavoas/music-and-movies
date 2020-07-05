import { store } from '../store';
import request from '../store/modules/data/actions';

import { ItensDoMenu } from '../objetos/menuNav.obj';
import { columns } from '../objetos/columns.obj';

// Quando há novo foco no input invalidado, limpar o CSS e o placeholder do input
export function removerAtributo(id) {
  document.getElementById(id).removeAttribute('class', 'invalid');
  document.getElementById(id).placeholder = '';
}

// THE TWO FUNCIONS BELOW ARE DESIGNED FOR RENDERING DATA ONTO THE PAGE ------------------------------------------------
/// 1) Create an object with the parameters to be interpreted by API as "query.params":
function getQueryParams(mainColumn, params) {
  const queryParams = {
    by: mainColumn,
  };

  const regExp = RegExp(/[?&](\w+)=(\w+)/, 'g');
  let match;

  while ((match = regExp.exec(params)) !== null) {
    queryParams[match[1]] = match[2];
  }

  return queryParams;
}

/// 2) Find the page settings and dispatch an action to read the data from that page:
export function readDataFrom(pathname, params, setState) {
  const from = setState ? 'pagina' : 'card';
  const path = pathname.slice(1);

  const settings = ItensDoMenu[path].subitens.list;

  const { titulo } = settings;
  const mainColumn = columns[path][0][1];
  const queryParams = getQueryParams(mainColumn, params);

  store.dispatch(request('READ', from, path, { queryParams, settings }));

  setState && setState(titulo);
}

export const getSettings = (path) => {
  const regExp = RegExp(
    `{(,?"\\w+":"?\\s?(([aA-zZ|0-9|À-ú])\\s?|\\3?[&-]\\s?\\3?)+?"?,?)+"path":"${path}"}`
  );

  const stringfyied = JSON.stringify(ItensDoMenu);
  return JSON.parse(stringfyied.match(regExp)[0]);
};
