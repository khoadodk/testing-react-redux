// https://www.npmjs.com/package/check-prop-types
import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import combineReducers from './../src/redux/reducers';
import { middleware } from '../src/redux/createStore';

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(combineReducers, initialState);
};
