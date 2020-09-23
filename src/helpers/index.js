/**
 * Checks how manny letters two words have in common
 * @function
 * @param {string} guessedWord First word
 * @param {string} secretWord Word to compare first word to
 * @returns {number} Number of letters contained to both words simultaniously
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  debugger;
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));

  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
}
