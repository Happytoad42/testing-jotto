import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';

import GuessedWords from './GuessedWords.js';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @funtion setup
 * @param {object} props
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('does not crash with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'guessed-words-component');
    expect(component.length).toBe(1);
  });

  test('renders instruction to guess a word', () => {
    const component = findByTestAttr(wrapper, 'guess-alert');
    expect(component.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 1,
    },
    {
      guessedWord: 'party',
      letterMatchCount: 5,
    },
  ];
  beforeEach(() => {
    wrapper = setup({
      guessedWords,
    });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'guessed-words-component');
    expect(component.length).toBe(1);
  });

  test('renders guessed words list component', () => {
    const guessedWordsList = findByTestAttr(wrapper, 'guessed-words-list');
    expect(guessedWordsList.length).toBe(1);
  });

  test('renders a table of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
