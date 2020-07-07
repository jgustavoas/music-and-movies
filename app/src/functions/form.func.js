import { store } from '../store';
import request from '../store/modules/data/actions';
import { signInRequest } from '../store/modules/auth/actions';
import { acao } from '../store/modules/componentes/actions';

import history from '../services/history';
import { makeRestParams } from './gerais.func';

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

export function getOptions() {
  store.dispatch(
    acao('FORM', 'card', 'TESTE', { path: 'genres', by: 'genre' })
  );
}

function getValues(fields, action) {
  const obj = {};

  Array.from(fields).forEach((el) => {
    const { name, localName, type, value, selectedOptions } = el;
    const field = action === 'Search' ? name.slice(0, -2) : name;

    const selectedOne = value !== 'none' && type === 'select-one';
    const text = selectedOne ? selectedOptions[0].innerText : '';

    const val = type === 'select-one' && action === 'Search' ? text : value;

    if (localName !== 'button' && val !== '') obj[field] = val;
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

  const { value: val } = mainField;
  const values = getValues(fields, action);
  const rest = makeRestParams(values);

  if (action === 'Search') history.push(`${path}?val=${val}${rest}`);
  else store.dispatch(request('CREATE', 'card', path, values));
};

export const keyEvent = (e) => e.key === 'Enter' && go(e);

/*

validarForm(inputs):
Esta função recebe como parâmetro uma array []
Os inputs a serem validados ficam dentro de uma segunda array no seguinte formato: [tipoDoInput, valorDoInput]
Ou seja, os inputs são inseridos na função como neste exemplo: [['email', $valor], [senha, $valor]]

*/
