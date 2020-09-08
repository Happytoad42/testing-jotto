import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Input = (props) => {
  return <div>{props.success ? 'Yay!' : 'Nay...'}</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Input);
