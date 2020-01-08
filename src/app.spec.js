import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from '../utils';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'Test title 1', body: 'Some text 1' },
        { title: 'Test title 2', body: 'Some text 2' }
      ]
    };
    wrapper = setUp(initialState);
  });
  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
