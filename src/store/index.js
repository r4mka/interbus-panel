import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { initializeApiClient } from 'utils';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const initialState = fromJS({});
const middlewares = [promiseMiddleware, thunk];
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
