import { createStore, applyMiddleware } from 'redux';
import combineReducer from './reducers';
import reduxThunk from 'redux-thunk';

export const middleware = [reduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export const store = createStoreWithMiddleware(combineReducer);
