import reducers from '../reducers';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
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