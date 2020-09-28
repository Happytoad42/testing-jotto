import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/testUtils';

import App, { UnconnectedApp } from './App';

/**
 * Factory function to mock ShallowWrapper for the connected App component
 * @function setup
 * @param {object} initialState Initial state for the setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store} />)
    .dive()
    .dive();
};

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'app-container');
  expect(appComponent.length).toBe(1);
});

describe('App component redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has secretWord piece of state as prop', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has guessedWords piece of state as prop', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });
  test('has access to "getSecretWord" action creator', () => {
    const wrapper = setup();
    const getSecretWordAction = wrapper.instance().props.getSecretWord;
    expect(getSecretWordAction).toBeInstanceOf(Function);
  });
});

test('getSecretWord runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const mockProps = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessWords: [],
  };

  // setup App with getSecretWord as a prop
  const wrapper = shallow(<UnconnectedApp {...mockProps} />);
  // run lifecycle method
  wrapper.instance().componentDidMount();
  // check if mock fn ran
  const getSecretWordCall = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCall).toBe(1);
});
