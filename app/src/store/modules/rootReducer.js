import { combineReducers } from 'redux';

import auth from './auth/reducer';
import components from './components/reducer';
import data from './data/reducer';

export default combineReducers({ auth, components, data });
