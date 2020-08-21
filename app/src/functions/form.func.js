import { store } from '../store';
import request from '../store/modules/data/actions';

import { signInRequest } from '../store/modules/auth/actions';
import { acao } from '../store/modules/components/actions';
import history from '../services/history';
import { makeRestParams } from './general.func';
import { columns } from '../objects/columns.obj';

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
  let isValid = true; // The input starts valid by default.

  return inputs.map((input) => {
    // Using map() for each array of inputs and destructuring that array:
    const { type, value } = input;

    // Regular expression to validate the e-mail:
    // This is an extra layer of validation beyond that one which is native of browsers regarding the email input type:
    const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // If the input type is email and its value doesn't match the regular expression, then "invalidEmail" is true:
    const invalidEmail = type === 'email' && !value.match(regexpEmail);

    // If the input is undefined, empty or an invalid email, then show error message:
    if (!value || value === '' || value.length < 4 || invalidEmail) {
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  });
}

// Clean-up the CSS and the placeholder when there is new focus in the input:
export function removerAtributo(id) {
  document.getElementById(id).removeAttribute('class', 'invalid');
  document.getElementById(id).placeholder = '';
}

export async function getOptions(path) {
  const by = columns[path][0][1];

  await fetch(`http://localhost:3333/list/${path}?by=${by}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      const data = { [path]: myJson };
      store.dispatch(acao('FORM:OPTIONS', 'card', path, data));
    });
}

export async function getAllOptions(model) {
  const items = columns[model].filter((item) => item[3]);

  const options = items.map(async (item) => {
    const path = item[3];
    await getOptions(path);
  });

  await Promise.all(options).then(() => store.dispatch(acao('FORM:READY')));
}

function getValues(fields, action) {
  const obj = {};

  Array.from(fields).forEach((field) => {
    const { name, localName, type, value, list, selectedOptions } = field;
    const fieldName = action === 'SEARCH' ? name.slice(0, -2) : name;

    // <datalist/>
    const [autocomplete] = list
      ? Array.from(list.options).filter((option) => option.value === value)
      : []; // it must dispatch a Create CRUD if no option is found then (promise) return the new id!

    // <select/>
    const selectedOne = value !== 'none' && type === 'select-one';
    const text = selectedOne ? selectedOptions[0].innerText : '';

    // value
    const val =
      type === 'select-one' && action === 'SEARCH'
        ? text
        : list && action === 'SEARCH'
        ? value
        : !list
        ? value
        : autocomplete.id;

    if (localName !== 'button' && val !== '') obj[fieldName] = val;
  });

  return obj;
}

export const go = (e) => {
  const { card, form } = store.getState().components;
  const { id, titulo } = card;
  const { id: rowId } = form.fill ? form.fill : {};
  const path = id.split('/')[0];

  const actions = {
    New: 'CREATE',
    Edit: 'UPDATE',
    Search: 'SEARCH',
  };

  const action = actions[titulo.split(' ')[0]];
  const [mainField, ...restFields] = e.target.form;
  const fields = action === 'SEARCH' ? restFields : e.target.form;
  const { name, value } = mainField;
  const values = getValues(fields, action);
  const cols = `${name}=${value}${makeRestParams(values)}`;
  const formData = { values, rowId };

  if (action === 'SEARCH') history.push(`${path}?${cols}`);
  else store.dispatch(request(action, 'card', path, formData));
};

export const keyEvent = (e) => e.key === 'Enter' && go(e);

export const fnOnChange = (e, field, state) => {
  const operation = e.target.form.lastChild.innerText;
  if (operation !== 'EDIT') return null;

  const { fields, ...rest } = state.fill;

  const updatedFields = fields.map((input, index) => {
    const [name, value, id] = input;

    if (index === field.index) return [name, e.target.value, id];
    else return [name, value, id];
  });

  const newFill = { fields: updatedFields, ...rest };

  state.setFill(newFill);
};

export const fnOnFocus = ({ target }, value) => {
  const condition = target.dataset.unfocused && target.value === '' && value;

  if (condition) {
    target.value = value;
    target.placeholder = '';
    delete target.dataset.unfocused;
  }
};

/*

validateForm(inputs):
This function recieves one array as parameter.
The inputs to be validated are inside a second array with this format: [inputType, inputValue].
For example: [['email', $value], [password, $value]]

*/
