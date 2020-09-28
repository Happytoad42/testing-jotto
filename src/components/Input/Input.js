import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';

import Congrats from '../Congrats/Congrats';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitGuessWord = this.submitGuessWord.bind(this);
  }

  handleInputChange(e) {
    this.setState({ currentGuess: e.target.value });
  }

  submitGuessWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: '' });
    }
  }

  render() {
    let contents;

    if (this.props.success) {
      contents = <Congrats success={true} />;
    } else {
      contents = (
        <form className='form-inline'>
          <input
            type='text'
            placeholder='guess a word'
            data-test='input-box'
            className='mb-2 mx-sm-3'
            value={this.state.currentGuess}
            onChange={this.handleInputChange}
          ></input>
          <button
            onClick={this.submitGuessWord}
            className='btn btn-primary mb-2'
            data-test='submit-button'
          >
            Submit
          </button>
        </form>
      );
    }
    return <div data-test='input-component'>{contents}</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
