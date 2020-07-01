import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import data from './data/sagas';
import components from './componentes/sagas';

export default function* rootSaga() {
  return yield all([auth, data, components]);
}
