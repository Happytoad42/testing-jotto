import React from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

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
        <Congrats success={true} />
        <GuessedWords guessedWords={this.dummyGuessedWords} />
      </div>
    );
  }
}

export default App;
