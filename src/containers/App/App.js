import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getSecretWord } from '../../actions';

import Input from '../../components/Input/Input';
import Congrats from '../../components/Congrats/Congrats';
import GuessedWords from '../../components/GuessedWords/GuessedWords';

export class UnconnectedApp extends React.Component {
  /**
   * @method componentDidMount
   * @returns {void}
   */
  componentDidMount() {
    // get secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div data-test='app-container' className='container'>
        <h1 style={{ textAlign: 'center' }}>Jotto App</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
