import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { UnconnectedInput } from './Input';

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

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('guessWord action craetor is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('guessWord action creator call', () => {
  test('guessWord is called when button is clicked', () => {
    const guessWordMock = jest.fn();
    const wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click');

    const guessWordMockCalls = guessWordMock.mock.calls.length;

    expect(guessWordMockCalls).toBe(1);
  });
});
