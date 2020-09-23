import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Return Redux Thunk function that dispatches GUESS_WORD action and (conditionally)
 * CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord Guessed word
 * @returns {function} Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    debugger;
    const letterMatchCount = getLetterMatchCount(secretWord, guessedWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount,
      },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};
