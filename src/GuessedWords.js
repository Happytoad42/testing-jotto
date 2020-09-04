import React, { Component } from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  return (
    <div data-test="guessed-words-component">
      <span data-test="guess-alert">
        {props.guessedWords.length ? "" : "Try to guess the secret word!"}
      </span>
    </div>
  );
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
