import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
// import {
//   formManagingMiddleware,
// } from '../middlewares';
import createRootReducer from './reducers';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'navigation']
};

const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
const { NODE_ENV = 'development' } = {};
const middleWares = applyMiddleware(
  thunk,
  /**
   * Order is important !!!
   */

  /**
   * Handles location change
   * and can prevent the app from redirecting
   */
  // formManagingMiddleware,
  /**
   * Final middleware for
   * location change handling
   */
  routerMiddleware(history),
  // logger,
);
const applyDevTools = NODE_ENV === 'production'
  ? middleWares
  : composeWithDevTools(middleWares);
const store = createStore(
  persistedReducer,
  applyDevTools
);

const persistor = persistStore(store);

export { persistor, store, history };
