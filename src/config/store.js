import reducers from '../reducers';
// import {applyMiddleware, createStore} from 'redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ["user", "reservation"],
};

const enhancedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
  const store = createStore(
    enhancedReducer,
    {},
    composeWithDevTools(),
  );
  const persistor = persistStore(store);
  return {store, persistor};
}