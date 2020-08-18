import { combineReducers } from 'redux';

import auth from './auth/reducer';
import componentes from './components/reducer';
import data from './data/reducer';

export default combineReducers({ auth, componentes, data });
