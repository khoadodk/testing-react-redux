import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const headerComponent = props => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => (component = headerComponent()));

  it('Should render a div with classname', () => {
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  });
  it('Should render a logo', () => {
    const logo = component.find('.logoIMG');
    expect(logo.length).toBe(1);
  });
});
