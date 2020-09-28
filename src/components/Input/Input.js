import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';

import Congrats from '../Congrats/Congrats';

export class UnconnectedInput extends Component {
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
          ></input>
          <button
            onClick={() => this.props.guessWord('train')}
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
