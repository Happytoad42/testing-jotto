import React from 'react';
import './App.css';

import Input from '../../components/Input/Input';
import Congrats from '../../components/Congrats/Congrats';
import GuessedWords from '../../components/GuessedWords/GuessedWords';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.dummyGuessedWords = [
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
  }

  render() {
    return (
      <div data-test='app-container' className='container'>
        <h1 style={{ textAlign: 'center' }}>Jotto App</h1>
        <Input />
        <Congrats success={false} />
        <GuessedWords guessedWords={this.dummyGuessedWords} />
      </div>
    );
  }
}

export default App;
