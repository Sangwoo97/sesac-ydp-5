import { Provider } from 'react-redux';
// import store from './store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  number: 50,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + 1 };
    case 'MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};
const store = configureStore({ reducer }, composeWithDevTools);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);
