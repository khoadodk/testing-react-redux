import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAtrr, checkProps } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  // Check prop types
  describe('Checking PropTypes', () => {
    it('Shoud not throw a warning', () => {
      const expectedProps = {
        header: 'Test header',
        desc: 'Test desc',
        tempArr: [
          {
            firstName: 'Test firstname',
            lastname: 'Test lastname',
            email: 'Test email',
            age: 23,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  // component have props
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a H1', () => {
      const h1 = findByTestAtrr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  // Component have no props
  describe('Have NO props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
