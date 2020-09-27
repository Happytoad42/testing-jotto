import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

/**
 * Factory function to mock ShallowWrapper for the connected  Input component with redux-mock-store
 * @function setup
 * @param {object} initialState Initial state for the setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe('Input', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'input-component');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders Submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('rendes without error', () => {
      const component = findByTestAttr(wrapper, 'input-component');
      expect(component.length).toBe(1);
    });

    test('not renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('not renders Submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('updates state', () => {});
