/* @flow */
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function configureStore(preloadedState: {} = {}) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunk,
      // require('redux-logger')
    )
  );
}
