import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { goBack } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Part extends Component {
  componentDidMount() {
    console.log();
  }
  render() {
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

Part.propTypes = {
  router: PropTypes.object,
};

function mapStateToState(state) {
  return {
    router: state.router,
  };
}

export default connect(mapStateToState, null)(Part);
