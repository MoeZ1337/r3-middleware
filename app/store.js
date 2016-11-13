import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { apiMiddleware } from 'redux-api-middleware';

import reducers from './reducers';

const combinedReducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
}));

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(combinedReducer, initialState);
}
