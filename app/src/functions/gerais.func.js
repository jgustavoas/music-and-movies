import { store } from '../store';
import request from '../store/modules/data/actions';

import { ItensDoMenu } from '../objetos/menuNav.obj';

// VALIDAÇÃO DE FORMULÁRIO:
// Esta função recebe como parâmetro uma array []
// Os inputs a serem validados ficam dentro de uma segunda array no seguinte formato: [tipoDoInput, valorDoInput]
// Ou seja, os inputs são inseridos na função como neste exemplo: [['email', $valor], [senha, $valor]]
export function validarForm(inputs) {
  let isValid = true; // O input começa válido por padrão.

  return inputs.map((dadosDoInput) => {
    // Usando map() para a array de cada input e desetruturando a array
    const [tipoDoInput, valorDoInput] = dadosDoInput;

    // Expressão regular para validar o formato do e-mail
    // É uma camada a mais de validação além da que já existe nos navegadores para o input do tipo "email".
    const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Se o input for do tipo 'email' e seu valor não der match com a expressão regular acima, então invalidEmail = true.
    const invalidEmail =
      tipoDoInput === 'email' && !valorDoInput.match(regexpEmail);

    // Se o input for undefined, ou vazio, ou for um e-mail inválido, então exibir mensagem de erro.
    if (
      !valorDoInput ||
      valorDoInput === '' ||
      valorDoInput.length < 4 ||
      invalidEmail
    ) {
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  });
}

// Quando há novo foco no input invalidado, limpar o CSS e o placeholder do input
export function removerAtributo(id) {
  document.getElementById(id).removeAttribute('class', 'invalid');
  document.getElementById(id).placeholder = '';
}

// THE TWO FUNCIONS BELOW ARE DESIGNED FOR RENDERING DATA ONTO THE PAGE ================================================
/// This first function creates an object with the parameters to be interpreted by API as "query.params":
function getQueryParams(mainColumn, params) {
  const queryParams = {
    by: mainColumn,
  };

  const regExp = RegExp(/[?&](\w+)=(\w+)/, 'g');
  let match;

  while ((match = regExp.exec(params)) !== null) {
    queryParams[match[1]] = match[2];
  }

  /* First solution (using a chain of methods):
  const queries = params
    ? params
        .replace('?', '')
        .split('&')
        .map((queryParam) => queryParam.split('='))
    : undefined;

  queries && queries.forEach((q) => (queryParams[q[0]] = q[1])); */

  return queryParams;
}

/// This second function finds the page settings and dispatch an action to read the data of that page:
export function readDataFrom(path, params, setState) {
  let titulo;

  Object.values(ItensDoMenu).forEach((item) => {
    Object.values(item).forEach((subitem) => {
      if (typeof subitem === 'object') {
        Object.values(subitem).forEach((subitem) => {
          if (subitem.path === path.slice(1)) {
            titulo = subitem.titulo;

            const { columns, path } = subitem;
            const mainColumn = columns[0][1];
            const queryParams = getQueryParams(mainColumn, params);

            store.dispatch(
              request('READ', 'pagina', path, {
                queryParams,
                settings: subitem,
              })
            );
          }
        });
      }
    });
  });

  setState(titulo);
}
