/* @flow */
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import ReactDOM from 'react-dom';
import App from './components/App';

const Root = ({store}) => (
  <Provider store={store}>
    <App/>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('main');
  const store = configureStore();
  root && ReactDOM.render(<Root store={store}/>, root);
});
