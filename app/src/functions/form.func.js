import { store } from '../store';
import request from '../store/modules/data/actions';

import { signInRequest } from '../store/modules/auth/actions';
import { acao } from '../store/modules/componentes/actions';
import history from '../services/history';
import { makeRestParams } from './gerais.func';
import { columns } from '../objetos/columns.obj';

export function tentarLogin(e, setStates) {
  e.preventDefault();

  const [setEmailValid, setPasswordValid] = setStates;
  const [email, password] = e.target.form;

  const camposPraValidar = [email, password];
  const [emailOk, passwordOk] = validarForm(camposPraValidar);

  console.log('emailOk, passwordOk :>> ', emailOk, passwordOk);

  setEmailValid(emailOk);
  setPasswordValid(passwordOk);

  if (emailOk && passwordOk)
    store.dispatch(signInRequest(email.value, password.value));
}

export function validarForm(inputs) {
  let isValid = true; // O input começa válido por padrão.

  return inputs.map((input) => {
    // Usando map() para a array de cada input e desetruturando a array
    const { type, value } = input;

    // Expressão regular para validar o formato do e-mail
    // É uma camada a mais de validação além da que já existe nos navegadores para o input do tipo "email".
    const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Se o input for do tipo 'email' e seu valor não der match com a expressão regular acima, então invalidEmail = true.
    const invalidEmail = type === 'email' && !value.match(regexpEmail);

    // Se o input for undefined, ou vazio, ou for um e-mail inválido, então exibir mensagem de erro.
    if (!value || value === '' || value.length < 4 || invalidEmail) {
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  });
}

export async function getOptions(path, value) {
  const by = columns[path][0][1];
  //const val = path !== 'genres' ? `&${by}=${value}` : '';

  await fetch(`http://localhost:3333/list/${path}?by=${by}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      const data = { [path]: myJson };
      store.dispatch(acao('FORM:READY', 'card', path, data));
    });
}

function getValues(fields, action) {
  const obj = {};

  Array.from(fields).forEach((field) => {
    const { name, localName, type, value, list, selectedOptions } = field;
    const fieldName = action === 'Search' ? name.slice(0, -2) : name;

    // <datalist/>
    const [autocomplete] = list
      ? Array.from(list.options).filter(
          (option) => option.value === field.value
        )
      : [];

    // <select/>
    const selectedOne = value !== 'none' && type === 'select-one';
    const text = selectedOne ? selectedOptions[0].innerText : '';

    // value
    const val =
      type === 'select-one' && action === 'Search'
        ? text
        : list && action === 'Search'
        ? value
        : !list
        ? value
        : autocomplete.id;

    if (localName !== 'button' && val !== '') obj[fieldName] = val;
  });

  return obj;
}

export const go = (e) => {
  const { card, titulo } = store.getState().componentes;
  const path = card.split('/')[0];

  const { form } = e.target;
  const action = titulo.includes('New') ? 'Create' : 'Search';

  const [mainField, ...restFields] = form;
  const fields = action === 'Search' ? restFields : form;

  const { name, value } = mainField;
  const values = getValues(fields, action);
  const cols = `${name}=${value}${makeRestParams(values)}`;

  if (action === 'Search') history.push(`${path}?${cols}`);
  else store.dispatch(request('CREATE', 'card', path, values));
};

export const keyEvent = (e) => e.key === 'Enter' && go(e);

/*

validarForm(inputs):
Esta função recebe como parâmetro uma array []
Os inputs a serem validados ficam dentro de uma segunda array no seguinte formato: [tipoDoInput, valorDoInput]
Ou seja, os inputs são inseridos na função como neste exemplo: [['email', $valor], [senha, $valor]]

*/
