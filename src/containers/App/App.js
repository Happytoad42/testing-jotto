import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getSecretWord } from '../../actions';

import Input from '../../components/Input/Input';
import Congrats from '../../components/Congrats/Congrats';
import GuessedWords from '../../components/GuessedWords/GuessedWords';

class App extends React.Component {
  render() {
    const dummyGuessedWords = [
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
    return (
      <div data-test='app-container' className='container'>
        <h1 style={{ textAlign: 'center' }}>Jotto App</h1>
        <Input />
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
