import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from '../../../utils/index';

import Button from './index';

describe('Button component', () => {
  //Check proptypes
  describe('Checking PropTypes', () => {
    it('Should not throw a error', () => {
      const expectedProps = {
        buttonText: 'Test text',
        emitEvent: () => {}
      };
      const propsError = checkProps(Button, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  //check render
  describe('Render', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = { buttonText: 'Test text', emitEvent: mockFunc };
      wrapper = shallow(<Button {...props} />);
    });

    it('Should render a button', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should emit a callback on click event', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
