import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App3 from './App3';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({ reducer: rootReducer }, composeWithDevTools);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App3 />
    </Provider>
  </React.StrictMode>
);
