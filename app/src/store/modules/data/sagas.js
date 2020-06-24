import { takeLatest, call, all } from 'redux-saga/effects';
import { store } from '../../index';
import request from '../data/actions';
import api from '../../../services/api';

import { avisosCRUD } from '../../../functions/ui.func';

export function* toCreate({ payload }) {
  const { source, path, data } = payload;
  const { colunas, valores } = data;
  const colunaPrincipal = colunas[0];
  const identificacao = `0_${colunaPrincipal}_${source}`;

  try {
    yield call(api.post, `${path}`, { data: { colunas, valores } });

    avisosCRUD(identificacao, 'CREATE:SUCCESS');

    store.dispatch(request('READ', source, path, { by: colunaPrincipal }));
  } catch (err) {
    avisosCRUD(identificacao, 'erro');
  }
}

export function* toRead({ payload }) {
  let { source, path, data } = payload;
  const { queryParams, settings } = data;
  let { by, val, col, sort, offset, limit } = queryParams ? queryParams : {};

  col = col ? `&col=${col}` : '';
  val = val === undefined ? '' : `&val=${val}`;
  sort = sort === undefined ? '&sort=ASC' : (sort = `&sort=${sort}`);
  offset = offset === undefined ? '' : (offset = `&offset=${offset}`);
  limit = limit === undefined ? '' : `&limit=${limit}`;

  try {
    const response = yield call(
      api.get,
      `${path}?by=${by}${col}${val}${sort}${offset}${limit}`
    );

    const data = { linhas: response.data, settings };

    store.dispatch(request('READ:SUCCESS', source, path, data));
  } catch (err) {
    store.dispatch(request('READ:FAIL'));
  }
}

export function* toUpdate({ payload }) {
  const { source, path, data } = payload;
  const colunaPrincipal = store.getState().data[source].colunaPrincipal;
  const identificacao = `${data.id}_${colunaPrincipal}_${source}`;

  try {
    yield call(api.patch, `${path}`, data);

    avisosCRUD(identificacao, 'UPDATE:SUCCESS');

    store.dispatch(request('READ', source, path, { by: colunaPrincipal }));
  } catch (error) {
    avisosCRUD(identificacao, source, 'erro');
    console.log('error :>> ', error);
  }
}

export function* toDelete({ payload }) {
  const { source, path, data } = payload;
  const colunaPrincipal = store.getState().data[source].colunaPrincipal;

  try {
    yield call(api.delete, `${path}`, { data: { id: String(data) } });

    avisosCRUD(data, source, 'DELETE:SUCCESS');

    store.dispatch(request('READ', source, path, { by: colunaPrincipal }));
  } catch (err) {
    avisosCRUD(data.id, 'erro');
    console.log('err :>> ', err);
  }
}

export default all([
  takeLatest('CREATE', toCreate),
  takeLatest('READ', toRead),
  takeLatest('UPDATE', toUpdate),
  takeLatest('DELETE', toDelete),
]);
