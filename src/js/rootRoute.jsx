import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import Home from './components/Home';
import Part from './components/Part';

export default class AppRouteComponent extends Component {
  componentDidMount() {}
  render() {
    const history = createHistory();
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/part" component={Part} />
        </div>
      </ConnectedRouter>
    );
  }
}
