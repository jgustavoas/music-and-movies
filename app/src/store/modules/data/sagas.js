import { takeLatest, call, all } from 'redux-saga/effects';
import { store } from '../../index';
import request from '../data/actions';
import api from '../../../services/api';
import { getSettings, makeRestParams } from '../../../functions/gerais.func';
import { fecharCard } from '../../../functions/card.func';
import { columns } from '../../../objetos/columns.obj';

export function* toCreate({ payload }) {
  const { path, data } = payload;
  const settings = getSettings(path);
  const queryParams = {
    by: columns[path][0][1],
  };

  try {
    yield call(api.post, `${path}`, { data });

    fecharCard();

    store.dispatch(request('READ', 'pagina', path, { queryParams, settings }));
  } catch (err) {
    console.log('err :>> ', err);
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
  const { path, data } = payload;
  const { rowId: id, values } = data;
  const settings = getSettings(path);
  const queryParams = {
    by: columns[path][0][1],
  };

  try {
    yield call(api.patch, `${path}`, { id, ...values });
    store.dispatch(request('READ', 'pagina', path, { queryParams, settings }));
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export function* toDelete() {
  const { id, path } = store.getState().componentes.card.data;
  const model = path.slice(1);
  const settings = getSettings(model);
  const queryParams = {
    by: columns[model][0][1],
  };

  try {
    yield call(api.delete, `${path}`, { data: { id } });

    fecharCard();

    store.dispatch(request('READ', 'pagina', path, { queryParams, settings }));
  } catch (err) {
    console.log('err :>> ', err);
  }
}

export default all([
  takeLatest('CREATE', toCreate),
  takeLatest('READ', toRead),
  takeLatest('UPDATE', toUpdate),
  takeLatest('DELETE', toDelete),
]);
