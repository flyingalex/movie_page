import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { goBack } from 'react-router-redux';
import { Link } from 'react-router-dom';

export default class Part extends Component {
  componentDidMount() {
    console.log(1111);
  }
  render() {
    console.log(this.context.store);
    return (
      <div>
        <Link to="/home">GO HOME</Link>
        <button onClick={() => this.context.store.dispatch(goBack())}>back</button>
      </div>
    );
  }
}
Part.contextTypes = {
  store: PropTypes.object,
};
