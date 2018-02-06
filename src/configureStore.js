import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import ReduxThunk from 'redux-thunk';

import { logger } from './middleware';
// use the middleware to log the state of redux
import rootReducer from './reducers';

export default function configure(initialState ={}, history = createHistory()) {
  // Enable it the browser has the devToolsExtension
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    ReduxThunk,
    routerMiddleware(history),
    logger
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);
// @TODO learn what do this
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
