import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  const tableStyles = {
    margin: '0 auto',
  };

  let contents;

  if (!guessedWords.length) {
    contents = (
      <span data-test='guess-alert'>
        {guessedWords.length ? '' : 'Try to guess the secret word!'}
      </span>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr key={index} data-test='guessed-word'>
        <td>{index + 1}</td>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <table
        style={tableStyles}
        className='table table-sm'
        data-test='guessed-words-list'
      >
        <thead className='thead-light'>
          <tr>
            <th>#</th>
            <th>Guessed word</th>
            <th>Letters Match Count</th>
          </tr>
        </thead>
        <tbody>{guessedWordsRows}</tbody>
      </table>
    );
  }

  return <div data-test='guessed-words-component'>{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};

export default GuessedWords;
