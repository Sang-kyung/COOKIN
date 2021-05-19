// import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './config/store';
import Routes from './Routes';

const {store, persistor} = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate laoding={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();