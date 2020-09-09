import React from 'react';
import { connect } from 'react-redux';

import Congrats from '../Congrats/Congrats';

export const Input = ({ success }) => {
  let contents;

  if (success) {
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
        <button className='btn btn-primary mb-2' data-test='submit-button'>
          Submit
        </button>
      </form>
    );
  }
  return <div data-test='input-component'>{contents}</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Input);
