import { takeLatest, call, all } from 'redux-saga/effects';
import { store } from '../../index';
import { acao } from './actions';

import api from '../../../services/api';

export function* toList({ payload }) {
  let { item: source, data } = payload;
  const { path, by } = data;

  try {
    const response = yield call(api.get, `list/${path}?by=${by}`);
    const data = { [path]: response.data };

    store.dispatch(acao('FORM:READY', source, path, data));
  } catch (err) {
    store.dispatch(acao('FORM:FAIL'));
  }
}

export default all([takeLatest('FORM', toList)]);
