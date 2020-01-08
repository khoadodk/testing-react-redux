import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from '../../../utils/index';

import ListItem from './index';

describe('LisItem Component', () => {
  //Check proptypes
  describe('Checking PropTypes', () => {
    it('Should not throw an error', () => {
      const expectedProps = {
        title: 'Test title',
        desc: 'Test Desc'
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  //Check render
  describe('Checking render with props', () => {
    let wrapper;
    beforeEach(() => {
      const props = { title: 'Test title', desc: 'Test Desc' };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('Shoud render without error', () => {
      const component = findByTestAtrr(wrapper, 'ListItemComponent');
      expect(component.length).toBe(1);
    });
    it('Shoud render a title', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });
    it('Shoud render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  //Checking not rendering
  describe('Checking not render without a title', () => {
    let wrapper;
    beforeEach(() => {
      const props = { desc: 'Test Desc' };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'ListItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
