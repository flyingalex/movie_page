import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../store/config-store';
import DevTools from '../DevTool/DevTool';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
          <DevTools />
        </div>
      </Provider>
    );
  }
}

// Not needed or used in minified mode
App.propTypes = {
  children: PropTypes.node.isRequired
};
