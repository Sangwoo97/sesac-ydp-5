import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App4 from './App4';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';
import Practice from './Practice';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({ reducer: rootReducer }, composeWithDevTools);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Practice />
    </Provider>
  </React.StrictMode>
);
