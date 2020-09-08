import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { findByTestAttr } from '../../test/testUtils';
import Input from './Input';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

/**
 * Factory function to create ShallowWrapper for the connected  Input component
 * @function setup
 * @param {object} initialState Initial state for the setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = mockStore(initialState);
  const wrapper = shallow(<Input store={store} />).dive();
  console.log(wrapper.debug());
};

setup({ success: false });

describe('renders successfuly', () => {
  describe('word has not been guessed', () => {
    test('renders without error', () => {});

    test('renders input box', () => {});

    test('renders Submit button', () => {});
  });

  describe('word has been guessed', () => {
    test('rendes without error', () => {});

    test('not renders input box', () => {});

    test('not renders Submit button', () => {});
  });
});

describe('updates state', () => {});
