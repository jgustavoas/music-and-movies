import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'reactapp',
      storage,
      whitelist: ['auth'], // incluindo os reducers cujas informações interessam que sejam persistidas
    },
    reducers
  );

  return persistedReducer;
};
