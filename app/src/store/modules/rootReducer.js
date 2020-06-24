import { combineReducers } from 'redux';

import auth from './auth/reducer';
import componentes from './componentes/reducer';
import data from './data/reducer';

export default combineReducers({ auth, componentes, data });
