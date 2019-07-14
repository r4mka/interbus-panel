import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { initializeApiClient } from 'utils';
import rootReducer from 'reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { normalizrMiddleware } from './middlewares';

const initialState = fromJS({});
const middlewares = [promiseMiddleware, thunkMiddleware, normalizrMiddleware];
const enhancers = [];

if (process.env.NODE_ENV !== 'production' && typeof window.devToolsExtension === 'function') {
  enhancers.push(window.devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export const apiClient = initializeApiClient(store.getState);

export default store;
