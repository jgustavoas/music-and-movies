import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import { store, persistor } from './store';

import history from './services/history';
import Rotas from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Rotas />
        </Router>
      </PersistGate>
    </Provider>
  );
}
