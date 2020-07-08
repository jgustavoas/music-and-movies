import { takeLatest, call, all } from 'redux-saga/effects';
import { store } from '../../index';
import request from '../data/actions';

import api from '../../../services/api';

import { avisosCRUD } from '../../../functions/ui.func';
import { getSettings, makeRestParams } from '../../../functions/gerais.func';

export function* toCreate({ payload }) {
  const { path, data } = payload;
  //const identificacao = `0_${colunaPrincipal}_${source}`;
  try {
    yield call(api.post, `${path}`, { data });
    //avisosCRUD(identificacao, 'CREATE:SUCCESS');
  } catch (err) {
    //avisosCRUD(identificacao, 'erro');
  }
}

export function* toRead({ payload }) {
  let { source, path, data } = payload;
  const { queryParams, settings } = data;

  let { by, sort, offset, limit, ...cols } = queryParams ? queryParams : {};

  cols = makeRestParams(cols);
  sort = sort === undefined ? '&sort=ASC' : (sort = `&sort=${sort}`);
  offset = offset === undefined ? '' : (offset = `&offset=${offset}`);
  limit = limit === undefined ? '' : `&limit=${limit}`;

  try {
    const response = yield call(
      api.get,
      `${path}?${cols}&by=${by}${sort}${offset}${limit}`
    );

    const data = { linhas: response.data, settings };

    store.dispatch(request('READ:SUCCESS', source, path, data));
  } catch (err) {
    store.dispatch(request('READ:FAIL'));
  }
}

export function* toUpdate({ payload }) {
  const { source, path, data } = payload;
  const { id, formData } = data;
  const settings = getSettings(path);
  const colunaPrincipal = settings.columns[0][1];
  const identificacao = `${data.id}_${colunaPrincipal}_${source}`;
  const queryParams = {
    by: colunaPrincipal,
  };

  try {
    yield call(api.patch, `${path}`, { id, ...formData });

    avisosCRUD(identificacao, 'UPDATE:SUCCESS');

    store.dispatch(request('READ', source, path, { settings, queryParams }));
  } catch (error) {
    avisosCRUD(identificacao, source, 'erro');
    console.log('error :>> ', error);
  }
}

export function* toDelete({ payload }) {
  const { source, path, data } = payload;
  const settings = getSettings(path);
  const colunaPrincipal = settings.columns[0][1];
  const queryParams = {
    by: colunaPrincipal,
  };

  try {
    yield call(api.delete, `${path}`, { data: { id: String(data) } });

    avisosCRUD(data, source, 'DELETE:SUCCESS');

    store.dispatch(request('READ', source, path, { settings, queryParams }));
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
