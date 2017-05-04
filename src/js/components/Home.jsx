import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { goBack } from 'react-router-redux';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  componentDidMount() {
    console.log(1111);
  }
  render() {
    return (
      <div>
        <Link to="/part">GO PART</Link>
        <button onClick={() => this.context.store.dispatch(goBack())}>back</button>
      </div>
    );
  }
}

Home.contextTypes = {
  store: PropTypes.object,
};
